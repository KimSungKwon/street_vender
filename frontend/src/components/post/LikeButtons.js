import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ListOfLikeButtons =styled.div`
    display: flex;  
    height: 90px;
    Button{
        background-color:white;
    }

    Button p{
        color:black;
        margin :0;
        text-align:center;
        font-size : 10px;
    }
`;
const LikeButtons = ({ post, likeButton, updateLike, changeLike, changeSoso, changeDisLike }) => {

    const onClickLike = ()=> {
        changeLike();
        updateLike();
    }
    const onClickSoso = ()=> {
        changeSoso();
        updateLike();
    }
    const onClickDisLike = ()=> {
        changeDisLike();
        updateLike();
    }

    return (
        <ListOfLikeButtons>
            <Button onClick={onClickLike}>
                <img src={require("../../images/like.png")}></img>
                <p>좋아요 {post && likeButton.like}</p>
            </Button>
            <Button onClick={onClickSoso}>
                <img src={require("../../images/soso.png")}></img>
                <p>평범해요 {post && likeButton.soso}</p>
            </Button>
            <Button onClick={onClickDisLike}>
                <img src={require("../../images/dislike.png")}></img>
                <p>별로에요 {post && likeButton.dislike}</p>
            </Button>
        </ListOfLikeButtons>
    );
}
export default LikeButtons;