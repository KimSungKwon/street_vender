import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import GoogleMapAPI from '../components/common/GoogleMapAPI';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostListContainer />
            <GoogleMapAPI />
            <PaginationContainer />          
        </>
    )
};

export default PostListPage;