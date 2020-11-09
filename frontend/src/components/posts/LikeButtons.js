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
const LikeButtons = () => {
    return (
        <ListOfLikeButtons>
            <Button>
                <img src={require("../../images/like.png")}></img>
                <p>좋아요 수1</p>
            </Button>
            <Button>
                <img src={require("../../images/soso.png")}></img>
                <p>평범해요 수</p>
            </Button>
            <Button>
                <img src={require("../../images/dislike.png")}></img>
                <p>별로에요 수</p>
            </Button>
        </ListOfLikeButtons>
    );
}
export default LikeButtons;