import Post from '../../models/post';   // 모델 
import mongoose from 'mongoose';    // ObjectId 검증
import Joi from '@hapi/joi';        // Request Body 검증
// import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';   // HTML 필터링

const { ObjectId } = mongoose.Types;

const sanitizeOption = {
    allowedTags: [
        'h1',
        'h2',
        'b',
        'i',
        'u',
        's',
        'p',
        'ul',
        'ol',
        'li',
        'blockquote',
        'a',
        'img',
    ],
    allowedAttrobutes: {
        a: ['href', 'name', 'target'],
        img: ['src'],
        li: ['class'],
    },
    allowedSchemes: ['data', 'http'],
};

// 미들웨어들
export const getPostById = async (ctx, next) => {
    const { id } = ctx.params;
    if(!ObjectId.isValid(id)) {
        ctx.status = 400;   // Bad Request
        return; 
    }
    try {
        const post = await Post.findById(id);
        // 포스트 존재하지 않을 때
        if (!post) {
            ctx.status = 404;   // Not Found
            return;
        }
        ctx.state.post = post;  // id로 포스트를 찾은 후 ctx.state 에 담아 둠
        return next();
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const checkOwnPost = (ctx, next) => {
    const { user, post } = ctx.state;
    if (post.user._id.toString() !== user._id) {
        ctx.status = 403;
        return;
    }
    return next();
}

/* 포스트 작성
POST /api/posts
{ 
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
}
*/
export const write = async ctx => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title: Joi.string().required(),         // required()가 있으면 필수항목
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string())   // 문자열로 이루어진 배열
            .required(),
    });
    
    // 검증하고 나서 검증 실패인 경우 에러처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    // 글 작성
    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body: sanitizeHtml(body, sanitizeOption),
        tags,
        user: ctx.state.user,    // jwtMiddleware
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};


/* 포스트 목록 조회
GET /api/posts?username=&tag=&page=     // /post?username=sungkwon
                                        // /post?tag=태그
*/

// html 을 없애고 내용이 길면 200자로 제한하는 함수
const removeHtmlAndShorten = body => {
    const filtered = sanitizeHtml(body, {   // html 없앰
        allowedTags: [],
    });
    return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

export const list = async ctx => {
    // query 는 문자열이기 때문에 숫자로 변환해주어야합니다.
    // 값이 주어지지 않았다면 1 을 기본으로 사용합니다.
    const page = parseInt(ctx.query.page || '1', 10);
  
    if (page < 1) {
      ctx.status = 400;
      return;
    }
  
    const { tag, username } = ctx.query;
    // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
    const query = {
      ...(username ? { 'user.username': username } : {}),
      ...(tag ? { tags: tag } : {}),
    };
  
    try {
      const posts = await Post.find(query)
        .sort({ _id: -1 })
        .limit(10)
        .skip((page - 1) * 10)
        .lean()
        .exec();
      const postCount = await Post.countDocuments(query).exec();
      ctx.set('Last-Page', Math.ceil(postCount / 10));
      ctx.body = posts.map(post => ({
        ...post,
        body: removeHtmlAndShorten(post.body),
      }));
    } catch (e) {
      ctx.throw(500, e);
    }
  };

/*특정 포스트 조회
GET /api/posts/:id
*/
export const read = async ctx => {
  ctx.body = ctx.state.post;
};


/* 특정 포스트 제거
DEL /api/posts/:id
*/
export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;   // No Content
    } catch (e) {
        ctx.throw(500, e);
    }
};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ 
    title: '수정',
    body: '수정 내용',
    tags: ['수정', '태그']
}
*/
export const update = async ctx => {
    const { id } = ctx.params;

    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string())
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const nextData = { ...ctx.request.body };   // 객체를 복사하고
    // body 값이 주어졌으면 HTML 필터링
    if (nextData.body) {
        nextData.body = sanitizeHtml(nextData.body);
    }

    try {
        const post = await Post.findByIdAndUpdate(id, nextData, {
            new: true,  // 이 값을 설정하면 업데이트된 데이터를 반환. false일때는 업데이트 되기 전의 데이터 반환
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
