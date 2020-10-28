import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';
import { useDispatch, useSelector } from 'react-redux';

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError, originalPostId } = useSelector(({ write }) => ({    // 리덕스 스토어 (인터넷 개발자탭의 redux탭에 있는 state 들.)
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
        originalPostId: write.originalPostId,
    }));

    const onPublish = () => {
        if (originalPostId) {
            dispatch(updatePost({ title, body, tags, id: originalPostId }));
            return;
        }
        dispatch(writePost({ title, body, tags }));
    };

    const onCancel = () => {
        history.goBack();
    };

    useEffect(() => {
        if (post) {
            const { _id, user } = post; // 서버에서 응답한 포스트 정보의 _id와 username값 참조 (jwtMiddleWare)
            history.push(`/@${user.username}/${_id}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);
    
    return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={originalPostId}/>;
};

export default withRouter(WriteActionButtonsContainer);