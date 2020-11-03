import React, { useEffect, useCallback } from 'react';
import GoogleMapRead from '../../components/post/GoogleMapRead';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const GoogleMapReadContainer = () => {

    const { post } = useSelector(({ post }) => ({   // title값과 body값을 리덕스 스토어에서 불러옴
        post: post.post,
    }));

    
    return <GoogleMapRead post={post} />;
};

export default GoogleMapReadContainer;