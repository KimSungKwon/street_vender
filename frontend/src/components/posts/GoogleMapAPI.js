import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const GoogleMapAPI = ({ onChangeAdMarkerOn, onChangeMarkerOn, posts, loading, user }) => {
    const [markers, setMarkers] = useState();
    const [selected, setSelected] = useState(null);
    const [adselected, setAdselected] = useState(null);

    const mapStyles = {        
        height: "100vh",
        width: "50%",
        float: "left",
       //display: "flex"
     };
    const defaultCenter = {
        lat: 37.496281, lng: 126.957390
    };

    // 구글맵 : 마우스 클릭 이벤트
    const addMarker = (e) => {
        const marker = {
            name: e.latLng.lat(),
            position: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            }
        }
        setMarkers(marker);
    }

    const dragMarker = (e) => {
        console.log(e);
        const newMarker = {
            name: e.latLng.lat(),
            position: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            }
        }
        setMarkers(newMarker);
        setAdselected(newMarker);
        onChangeAdMarkerOn(newMarker);
    }
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCh2Dfsi0RTtFrKPTdMgTLWKgkT-MRRexg'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}
                onClick={addMarker}             
            >
            {/* 어드민 로그인하면 지도에 클릭으로 마커 생성 가능 */}
            {user && user.username == 'admin' && markers &&
                <Marker 
                    key={markers.name} 
                    position={markers.position} 
                    draggable={true}
                    onClick={() => {
                        onChangeAdMarkerOn(markers);
                        setAdselected(markers);
                    }}
                    onDragEnd={dragMarker}
                />
            }
            {/* 글목록에서 마커들을 불러와 구글맵에 마커 생성 */}
            {!loading && posts && (
                posts.map(post => {
                    return (
                        <Marker 
                            key={post._id} 
                            position={post.marker.position} 
                            onClick={() => {
                                onChangeMarkerOn(post);
                                setSelected(post);
                            }}
                        />
                    )
                }))
            }
            {/* 버그: admin으로 로그인 후 새로 생성한 마커말고 다른 마커 누르면 에러 */}
            {/* 어드민 전용 인포 윈도우 */}
            {user && (user.username == 'admin' && adselected) ? (
                <InfoWindow 
                    position={{ lat: adselected.position.lat + 0.00025, lng: adselected.position.lng  }}
                    onCloseClick={() => { setAdselected(null); }}
                >
                    <div>
                        <h3>마커선택됨</h3>
                    </div>
                </InfoWindow>
            ) : null}
            {/* 유저 전용 인포 윈도우 */}
            {user && selected ? (
                <InfoWindow 
                    position={{ lat: selected.marker.position.lat + 0.00025, lng: selected.marker.position.lng  }}
                    onCloseClick={() => { setSelected(null); }}
                >
                    <div>
                        <h3>{selected.marker.name}가 선택되었습니다!</h3>
                        <Link to={`/@admin/${selected._id}`}>이동</Link>
                    </div>
                </InfoWindow>
            ) : null}
            </GoogleMap>
        </LoadScript>
    )
}
export default GoogleMapAPI;
