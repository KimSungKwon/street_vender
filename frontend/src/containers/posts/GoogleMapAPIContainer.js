import React from 'react';
import GoogleMapAPI from '../../components/posts/GoogleMapAPI';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/posts';

const GoogleMapAPIContainer = () => {
    const dispatch = useDispatch();
    const markerOn = useSelector(state => state.posts.markerOn);
    
    const onChangeMarkerOn = value => {
        dispatch(
            changeField({
                key: 'markerOn',
                value: value,
            })
        )
    }

    return <GoogleMapAPI onChangeMarkerOn={onChangeMarkerOn} markerOn={markerOn} />;
};

export default GoogleMapAPIContainer;