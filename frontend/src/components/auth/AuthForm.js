import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

// 로그인, 회원가입 폼

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: #7b7bbd;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1.1px solid #7b7bbd;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    background-color: transparent;
    &:focus {
        color: #232323;
    }
    & + & {
        margin-top: 1rem;
    }
`;

// 폼 하단에 로그인이나 회원가입 링크 보여줌
const Footer = styled.div`
    margin-top: 1rem;
    text-align: center;

    a {
        text-decoration: none;
    }
`;

const MarginTopButton = styled(Button)`
    margin-top: 2rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입'
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <form onSubmit={onSubmit}>
                <StyledInput 
                    placeholder="아이디"
                    autoComplete="username"
                    name="username" 
                    value={form.username}   // login.username 
                    onChange={onChange}
                />
                <StyledInput 
                    placeholder="비밀번호"
                    autoComplete="new-password"
                    name="password"
                    type="password"
                    value={form.password}   // register.password 
                    onChange={onChange}
                />
                {type === 'register' && (
                    <StyledInput
                        placeholder="비밀번호 확인"
                        autoComplete="new-password"
                        name="passwordConfirm"
                        type="password"
                        value={form.passwordConfirm}    // register.passwordConfirm 
                        onChange={onChange}
                    />
                )}
                <MarginTopButton fullWidth>{text}</MarginTopButton>
            </form>
            <Footer>
                {type === 'login' ? 
                    (<Link to="/register">회원가입</Link>)
                    :
                    (<Link to="login">로그인</Link>) 
                }
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;