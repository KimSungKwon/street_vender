import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login
    }));
    // 인풋 변경 event handler
    const onChange = e => {
        const { value, name } = e.target;   // StyledInput. value: {form.~}  name: username, password, -Confirm
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };
    // 폼 등록 event handler
    const onSubmit = e => {
        e.preventDefault();
    };

    // 컴포넌트가 처음 렌더링될 때 form 초기화
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm 
            type="login" 
            form={form} 
            onChange={onChange} 
            onSubmit={onSubmit} 
        />
    );
};

export default LoginForm;