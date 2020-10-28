import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector( ({ auth, user }) => ({  // component로 주는 props. user는 백엔드의 user정보
        form: auth.register, 
        auth: auth.auth,
        authError: auth.authError,
        user: user.user     
        }));   // form을 register으로

    // 인풋 변경 이벤트 헨들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;   // StyledInput들의 value 값들.
        
        // 빈칸이 있으면
        if([username, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력하시오');
            return;
        }
        // 비밀번호가 일치하지 않으면
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않음');
            dispatch(changeField({ form: 'register', key:'password', value:'' }));
            dispatch(changeField({ form: 'register', key:'passwordConfirm', value:'' }));
            return;
        }
        dispatch(register({ username, password}));  // 현재 아이디, 비밀번호를 파라미터로 액션 디스패치
    };

    // 컴포넌트가 처음 렌더링될 때 form 초기화
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    // 회원가입 성공, 실패 처리
    useEffect(() => {
        if (authError) {
            if (authError.response.status === 409) { // backend/api/auth.ctrl.js
                setError('이미 존재하는 아이디입니다');
                return;
            }  
            setError('회원가입 실패');
            return;
        }
        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);
    
    // user 값이 잘 설정됐는지 확인 
    useEffect(() => {
        if (user) {
            history.push('/');  // 홈화면 이동
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage is not working');
            }
        }       
    }, [history, user]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(RegisterForm);