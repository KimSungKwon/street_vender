import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import GoogleMapReadContainer from '../containers/post/GoogleMapReadContainer';

const PostPage = () => {
    return (
        <>  
            <HeaderContainer />
            <PostViewerContainer />
            <GoogleMapReadContainer />
        </>
    );
};

export default PostPage;