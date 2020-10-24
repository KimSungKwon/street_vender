import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// 헤더 컴포넌트 (로고, 로그인, 회원가입)

const HeaderBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 100;
    transition: 0.3s;

    ${props =>
        props.inverted && 
        css`
            background-color: #8080c0;
            border: 0;
        `}
    
    .header-menu {
        float: right;
        justify-content: space-between;
        font-size: 15px;
        text-decoration: none;
        margin-top: 15px;
        a {
            margin-left: 20px;
            margin-right: 20px;
        }
        ${props =>
            props.inverted &&
            css`
                color: black;
            `}
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Header = () => {
    const [inverted, setInverted] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            let currentScroll = window.scrollY;
            if (currentScroll !== 0)
                setInverted(true);
            else 
                setInverted(false);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [inverted])
    
    return (    
        <HeaderBlock inverted={inverted}>
            <StyledLink to="/" style={{ marginLeft: 25 }}>MYBLOG</StyledLink>
            <div className="header-menu">
                <StyledLink to="/login">로그인</StyledLink>
                <StyledLink to="/register">회원가입</StyledLink>
            </div>
        </HeaderBlock>
    );
};

export default Header;