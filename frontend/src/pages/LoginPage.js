import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
// import AuthForm from '../components/auth/AuthForm';
import LoginForm from '../containers/auth/LoginForm';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <Helmet>
                <title>로그인 - Street Vender</title>
            </Helmet>
            <LoginForm />
        </AuthTemplate>
    )
};

export default LoginPage;