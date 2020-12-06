import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import {CheckLoginButton} from '../common/Button';

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
const LikeButtons = ({ post, likeButton, updateLike, changeLike, changeSoso, changeDisLike, buttonClicked, changeClicked, user }) => {
    const onClickLike = ()=> {
        if(buttonClicked == 'like' || !buttonClicked){
            changeClicked('like');
            changeLike(buttonClicked);
        }
        updateLike();
    }
    const onClickSoso = ()=> {
        if(buttonClicked == 'soso' || !buttonClicked){
            changeClicked('soso');
            changeSoso(buttonClicked);
        }
        updateLike();
    }
    const onClickDisLike = ()=> {
        if(buttonClicked == 'dislike' || !buttonClicked){
            changeClicked('dislike');
            changeDisLike(buttonClicked);
        }
        updateLike();
    }

    return user ?
    (
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
    ) :
    (
        <ListOfLikeButtons>
            <CheckLoginButton to="/login">
                <Button onClick={onClickLike}>
                    <img src={require("../../images/like.png")}></img>
                    <p>좋아요 {post && likeButton.like}</p>
                </Button>
            </CheckLoginButton>
            <CheckLoginButton to="/login">
                <Button onClick={onClickSoso}>
                    <img src={require("../../images/soso.png")}></img>
                    <p>평범해요 {post && likeButton.soso}</p>
                </Button>
            </CheckLoginButton>
            <CheckLoginButton to="/login">
                <Button onClick={onClickDisLike}>
                    <img src={require("../../images/dislike.png")}></img>
                    <p>별로에요 {post && likeButton.dislike}</p>
                </Button>
            </CheckLoginButton>
        </ListOfLikeButtons>
    );
}
export default LikeButtons;