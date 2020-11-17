import React, { useEffect, useCallback } from 'react';
import GoogleMapWrite from '../../components/write/GoogleMapWrite';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const GoogleMapWriteContainer = () => {
    const dispatch = useDispatch();
    const { marker, title, markerOn, user } = useSelector(({ write, posts, user }) => ({   // title값과 body값을 리덕스 스토어에서 불러옴
        marker: write.marker,
        title: write.title,
        markerOn: posts.markerOn,
        user: user.user,
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),    // useCallback: 823p
        [dispatch]
    );
    // 언마운트 될때 초기화
    useEffect(() => {
        return () => {  // 뒷정리 함수 return
            dispatch(initialize());
        };
    }, [dispatch]);
    
    return <GoogleMapWrite onChangeField={onChangeField} marker={marker} title={title} markerOn={markerOn} user={user} />;
};

export default GoogleMapWriteContainer;