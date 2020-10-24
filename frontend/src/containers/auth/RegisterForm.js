import React, { useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.register
    }));
    // 인풋 변경 event handler
    const onChange = e => {
        const { value, name } = e.target;   // StyledInput. value: {form.~}  name: username, password, -Confirm
        dispatch(
            changeField({
                form: 'register',
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
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <AuthForm 
            type="register" 
            form={form} 
            onChange={onChange} 
            onSubmit={onSubmit} 
        />
    );
};

export default RegisterForm;