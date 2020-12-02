import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../../containers/posts/SearchBarContainer';
import Pagination from './Pagination';

import {initialState} from '../../modules/posts';

const PostListBlock = styled(Responsive)`
    margin-top: 70px;
    float:right;
    width: 50%;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;    
    margin-bottom: 1rem;
`;

const PostItemBlocksWrapper =styled.div`
    height : window.outerHeight;
    float: left;
    
`;

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    
    /* 맨위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 1rem;
    }
`;

const ListOfLikeButtons =styled.div`
    display: flex;  
    height: 90px;
    div{
        background-color:white;
        padding-right:10px;
        padding-left:10px
    }

    div p{
        color:black;
        margin :0;
        text-align:center;
        font-size : 10px;
    }
`;
const Scroll = styled.div`
    height : 100vh;
    overflow-y:scroll;
`;
const PostItem = ({ post }) => {
const { publishdDate, title, user, body, tags, _id, likeButton } = post;
console.log(post);
return (
<PostItemBlocksWrapper>
    <PostItemBlock>
        <h2>
            <Link to={`/@${user.username}/${_id}`}>{title}</Link>
        </h2>
        <SubInfo username={user.username} publishdDate={new Date(publishdDate)} /> 
        <Tags tags={tags} />
        <p>{body}</p>
        <ListOfLikeButtons>
        <div>
            <img src={require("../../images/like.png")}></img>
            <p>좋아요 {post && likeButton.like}</p>
        </div>
        <div>
            <img src={require("../../images/soso.png")}></img>
            <p>평범해요 {post && likeButton.soso}</p>
        </div>
        <div>
            <img src={require("../../images/dislike.png")}></img>
            <p>별로에요 {post && likeButton.dislike}</p>
        </div>
    </ListOfLikeButtons>
    </PostItemBlock>
</PostItemBlocksWrapper>    
);
};

const PostList = ({ posts, loading, error, adMarkerOn, showWrittenButton, user }) => {
    const filteredPostlist = (postsList) =>{
        postsList = postsList.filter((post) =>{
            if(initialState.search == null){
                return post;
            }
            else{
                return (post.tags.indexOf(initialState.search) > -1);
            }
        })
        return postsList.map((post) => {
            return <PostItem post={post} key={post._id} />
        })
    }
    if (error) {
        return <PostListBlock>에러 발생</PostListBlock>;
    }

    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                <SearchBarContainer/>
                {user && user.username == 'admin' ? ((showWrittenButton && adMarkerOn) ? (
                    <Button cyan to="/write">
                        가게 등록하기
                    </Button>
                ) : (<Button gray>마커를 선택하세요</Button>)) : null
                }
            </WritePostButtonWrapper>
            {/* 로딩중 아니고, 포스트배열이 존재할 때 */}
            {!loading && posts && (
                <Scroll>
                    {filteredPostlist(posts)}
                </Scroll>
            )}
        </PostListBlock>
    );
};

export default PostList;
