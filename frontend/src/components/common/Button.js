import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: #7b7bbd;
    &:hover {
        background: #8b8bc5;
    }
    
    ${props => 
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
        `}
`;

const Button = props => <ButtonBlock {...props} />;

export default Button;