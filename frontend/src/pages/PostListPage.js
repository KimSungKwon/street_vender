import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import GoogleMapAPIContainer from '../containers/posts/GoogleMapAPIContainer';

const PostListPage = () => {
    return (
        <>
            
            <GoogleMapAPIContainer />
            <PostListContainer />
            <HeaderContainer />
            
                      
        </>
    )
};

export default PostListPage;