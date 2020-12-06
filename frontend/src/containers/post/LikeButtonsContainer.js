import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LikeButtons from '../../components/post/LikeButtons';
import { updatePost } from '../../modules/write';
import { changeField } from '../../modules/post';

const LikeButtonsContainer = () => {
    const dispatch = useDispatch();
    const { post, likeButton, _id, buttonClicked } = useSelector(({ post }) => ({   // title값과 body값을 리덕스 스토어에서 불러옴
        post: post.post,
        likeButton: post.post.likeButton,
        _id: post.post._id,
        buttonClicked: post.buttonClicked,
    }));

    const changeLike = (Buttonclicked) => {
        if (Buttonclicked == false){
            likeButton.like += 1;
        } else if (Buttonclicked == 'like'){
            likeButton.like -= 1;
            changeClicked(false);
        }
    };
    const changeSoso = (Buttonclicked) => {
        if (Buttonclicked == false){
            likeButton.soso += 1;
        } else if (Buttonclicked == 'soso'){
            likeButton.soso -= 1;
            changeClicked(false);
        }
    }
    const changeDisLike = (Buttonclicked) => {
        if (Buttonclicked == false){
            likeButton.dislike += 1;
        } else if (Buttonclicked == 'dislike'){
            likeButton.dislike -= 1;
            changeClicked(false);
        }
    }
    const updateLike = () => {
        dispatch(updatePost({ likeButton, id: _id }));
        return;
    };

    const changeClicked = value => {
        dispatch(
            changeField({
                key: 'buttonClicked',
                value: value,
            })
        )
    }

    return <LikeButtons post={post} likeButton={likeButton} updateLike={updateLike} 
        changeLike={changeLike} changeSoso={changeSoso} changeDisLike={changeDisLike} 
        buttonClicked={buttonClicked} changeClicked={changeClicked}
        />;
};

export default LikeButtonsContainer;