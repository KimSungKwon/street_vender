import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    
    &:hover {
        background: ${palette.gray[6]};
    }
    &:disabled {
        background: ${palette.gray[3]};
        color: ${palette.gray[5]};
        cursor: not-allowed;
    }
    
    ${props =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `
    }
    ${props =>
        props.cyan &&
        css`
            background: ${palette.cyan[5]};
            &:hover {
                background: ${palette.cyan[4]};
            }
        `
    }
    ${props =>
        props.gray &&
        css`
            background: ${palette.gray[6]};
        `
    }
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const StyledCheckLoginButton = styled(Link)`
    ${styled.button}
`;

export const CheckLoginButton = props =>{
    return ( <StyledCheckLoginButton {...props} cyan={props.cyan ? 1 : 0} gray={props.gray ? 1 : 0} /> );
}

const Button = props => { // Button에 to 라는 props가 있는가? 
    return props.to ? ( <StyledLink {...props} cyan={props.cyan ? 1 : 0} /> ) 
    : (<StyledButton gray={props.gray ? 1 : 0} {...props} /> );
};

export default Button;