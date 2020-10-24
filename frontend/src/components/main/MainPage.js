import React from 'react';
import styled from 'styled-components';
import bg_main from '../../images/bg_main.png';
import Button from '../common/Button';

// 메인 페이지 

const MainPageBodyBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 1000px;
    background-image: url(${bg_main});

    .title {
        padding-top: 100px;
        font-family: 'Heebo', sans-serif;
        text-align: center;
        font-size: 80px;
        color: #8080c0;
    }

    form {
        position: absolute;
        left: 0;
        right: 0;
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    
    border: none;
    border-bottom: 1.1px solid #7b7bbd;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    outline: none;
    background-color: transparent;
    width: 30%;
    &:focus {
        color: #232323;
    }
`;


const MainPageBody = ({ onSubmit, onChange }) => {
    return (
        <MainPageBodyBlock>
            <div className="title">title</div>
            <form onSubmit={onSubmit}>
                <StyledInput 
                    placeholder="검색"
                    autoComplete="search"
                    name="search"
                    onChange={onChange}
                />
                <Button>Button</Button>
            </form>
        </MainPageBodyBlock>
    );
};

export default MainPageBody;