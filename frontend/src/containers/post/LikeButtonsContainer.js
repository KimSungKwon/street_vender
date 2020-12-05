import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LikeButtons from '../../components/post/LikeButtons';
import { updatePost } from '../../modules/write';

const LikeButtonsContainer = () => {
    const { user } = useSelector( ({ user }) => ({ user: user.user }) );
    const dispatch = useDispatch();
    const { post, likeButton, _id } = useSelector(({ post }) => ({   // title값과 body값을 리덕스 스토어에서 불러옴
        post: post.post,
        likeButton: post.post.likeButton,
        _id: post.post._id
    }));

    const changeLike = () => {
        likeButton.like += 1;
    };
    const changeSoso = () => {
        likeButton.soso += 1;
    }
    const changeDisLike = () => {
        likeButton.dislike += 1;
    }

    const updateLike = () => {
        dispatch(updatePost({ likeButton, id: _id }));
        return;
    };
    
    return <LikeButtons post={post} likeButton={likeButton} updateLike={updateLike} changeLike={changeLike} changeSoso={changeSoso} changeDisLike={changeDisLike} user={user}/>;
};

export default LikeButtonsContainer;