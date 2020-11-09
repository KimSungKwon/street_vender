import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';
import ListOfLikeButtons from './LikeButtons';
const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
    float: right;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
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
        margin-top: 2rem;
    }
`;

const PostItem = ({ post }) => {
    const { publishdDate, title, user, body, tags, _id, } = post;
    return (
        <PostItemBlock>
            <h2>
                <Link to={`/@${user.username}/${_id}`}>{title}</Link>
            </h2>
            <SubInfo username={user.username} publishdDate={new Date(publishdDate)} /> 
            <Tags tags={tags} />
            <p>{body}</p>
            <ListOfLikeButtons></ListOfLikeButtons>
        </PostItemBlock>
    );
};

const PostList = ({ posts, loading, error, markerOn, showWrittenButton }) => {
    if (error ) {
        return <PostListBlock>에러 발생</PostListBlock>;
    }

    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                {(showWrittenButton && markerOn) ? (
                    <Button cyan to="/write">
                        새 리뷰 작성하기
                    </Button>
                ) : (<Button gray>마커를 선택하세요</Button>)}
            </WritePostButtonWrapper>
            {/* 로딩중 아니고, 포스트배열이 존재할 때 */}
            {!loading && posts && (
                <div>
                    {posts.map(post => (
                        <PostItem post={post} key={post._id} />
                    ))}
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;