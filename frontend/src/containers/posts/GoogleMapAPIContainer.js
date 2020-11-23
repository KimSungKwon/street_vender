import React from 'react';
import GoogleMapAPI from '../../components/posts/GoogleMapAPI';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/posts';

const GoogleMapAPIContainer = () => {
    const dispatch = useDispatch();
    // const markerOn = useSelector(state => state.posts.markerOn);
    const { posts, loading, markerOn, user } = useSelector(({ posts, loading, user }) => ({
        posts: posts.posts,
        markerOn: posts.markerOn,
        user: user.user,
        loading: loading['posts/LIST_POSTS'],
    }));

    const onChangeMarkerOn = value => {
        dispatch(
            changeField({
                key: 'markerOn',
                value: value,
            })
        )
    }
    const onChangeAdMarkerOn = value => {
        dispatch(changeField({
            key: 'adMarkerOn',
            value: value,
        }))
    }

    return <GoogleMapAPI 
        onChangeAdMarkerOn={onChangeAdMarkerOn} onChangeMarkerOn={onChangeMarkerOn} 
        posts={posts} loading={loading} 
        user={user} markerOn={markerOn} />;
};

export default GoogleMapAPIContainer;