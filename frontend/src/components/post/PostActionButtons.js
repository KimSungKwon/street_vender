import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from '../post/AskRemoveModal';

const PostActionButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
`;
const ActionButton = styled.button`
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    color: ${palette.gray[6]};
    font-weight: bold;
    outline: none;
    border: none;
    font-size: 0.875rem;
    cursor: pointer;
    &:hover {
        background: ${palette.gray[1]};
        color: ${palette.cyan[7]};
    }
    & + & {
        margin-left: 0.25rem;
    }
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
    const [modal, setModal] = useState(false);
    const onRemoveClick = () => {
        setModal(true);
    };
    const onCancle = () => {    // "취소" 클릭
        setModal(false);
    };
    const onConfirm = () => {   // "확인" 클릭
        setModal(false);
        onRemove();
    };

    return (
        <>
            <PostActionButtonsBlock>
                <ActionButton onClick={onEdit}>수정</ActionButton>
                <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
            </PostActionButtonsBlock>
            <AskRemoveModal
                visible={modal}
                onConfirm={onConfirm}
                onCancle={onCancle}
            />
        </>
    );
};

export default PostActionButtons;
