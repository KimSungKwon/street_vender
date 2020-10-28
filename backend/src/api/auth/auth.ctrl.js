import User from '../../models/user';
import Joi from '@hapi/joi';

/*
    POST /api/auth/register
    {
        username: 'sungkwon'
        password: 'sungkwon123'
    }
*/
export const register = async ctx => {
    // Request Body 검증
    const schema = Joi.object().keys({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required()
    });
    const result = schema.validate(ctx.request.body); 
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { username, password } = ctx.request.body;
    try {
        // username 중복 확인
        const exists = await User.findByUsername(username);
        if (exists) {
            ctx.status = 409;   // Conflict
            return;
        }

        const user = new User({
            username 
        });
        await user.setPassword(password);   // 비밀번호(hashedPassword) 설정
        await user.save();  // 데이터베이스에 저장
        // 응답할 데이터에서 hashedPassword 필드 제거 (보안성)
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,    // 7일
            httpOnly: true  // 악성스크립트공격(XSS) 방어
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*  
    POST /api/auth/login
    {
        username: 'sungkwon',
        password: 'sungkwon123'
    }
*/
export const login = async ctx => {
    const { username, password } = ctx.request.body;

    // username, password 없으면 에러 처리
    if (!username || !password) {
        ctx.status = 401;   // Unauthorized
        return;
    }

    try {
        const user = await User.findByUsername(username);
        // 계정 존재하지 않으면 에러 처리
        if (!user) {
            ctx.status = 401;
            return;
        }
        const valid = await user.checkPassword(password);
        // 비밀번호 틀림
        if (!valid) {
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
            httpOnly: true
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/auth/check
*/
export const check = async ctx => {
    const { user } = ctx.state; // jwtMiddleware
    if (!user) {
        // 로그인 중 아님
        ctx.status = 401;   // Unauthorized
        return;
    }
    ctx.body = user;
};

/*
    POST /api/auth/logout
*/
export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204;   // No Content
};