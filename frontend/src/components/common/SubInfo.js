import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
    /* props가 margin-top을 가지고 있으면(PostViewer) margin-top 값을 1rem 로 설정 */
    ${props => 
        props.hasMarginTop &&
        css`
            margin-top: 1rem;
        `}
    color: ${palette.gray[6]};

    /* span 사이에 가운데점 문자 */
    span + span:before {
        color: ${palette.gray[4]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const SubInfo = ({ username, publishdDate, hasMarginTop }) => {
    return (
        <SubInfoBlock hasMarginTop={hasMarginTop}> 
            <span>
                <b>
                    <Link to={`/@${username}`}>{username}</Link>    {/* username누르면 링크 */}
                </b>
            </span>
            <span>{new Date(publishdDate).toLocaleDateString()}</span>
        </SubInfoBlock>
    );
};

export default SubInfo;