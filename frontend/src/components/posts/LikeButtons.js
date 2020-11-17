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
const LikeButtons = ({likeNum}) => {
    return (
        <ListOfLikeButtons>
            <Button>
                <img src={require("../../images/like.png")}></img>
                <p>좋아요{likeNum.like}</p>
            </Button>
            <Button>
                <img src={require("../../images/soso.png")}></img>
                <p>평범해요{likeNum.soso}</p>
            </Button>
            <Button>
                <img src={require("../../images/dislike.png")}></img>
                <p>별로에요{likeNum.dislike}</p>
            </Button>
        </ListOfLikeButtons>
    );
}
export default LikeButtons;