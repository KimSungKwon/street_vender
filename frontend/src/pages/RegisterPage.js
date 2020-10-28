import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
// import AuthForm from '../components/auth/AuthForm';
import RegisterForm from '../containers/auth/RegisterForm';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <Helmet>
                <title>회원가입 - Street Vender</title>
            </Helmet>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;
