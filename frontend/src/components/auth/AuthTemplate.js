import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg_main from '../../images/bg_main.png';

// 회원가입, 로그인 페이지의 레이아웃

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${bg_main});

`;

const StyledLink = styled(Link)`
    font-size: 60px;
    font-weight: bold;
    color: #7b7bbd;
    margin-bottom: 9rem;
    text-decoration: none;
`;

const WhiteBox = styled.div`
    width: 360px;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <StyledLink to="/">TEMP NAME</StyledLink>
            <WhiteBox>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;