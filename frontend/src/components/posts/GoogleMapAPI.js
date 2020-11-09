import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';

const GoogleMapAPI = ({ onChangeMarkerOn, markerOn }) => {
    const [markers, setMarkers] = useState([]);
    const [markerClicked, setMarkerClicked] = useState(false);

    const mapStyles = {        
        height: "100vh",
        width: "50%",
        float: "left",
        
       //display: "flex"
        
       
     };
    const defaultCenter = {
        lat: 37.496281, lng: 126.957390
    };

    const addMarker = (e) => {
        const marker = {
            name: e.latLng.lat(),
            position: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        }
        const nextMarkers = [...markers, marker];
        setMarkers(nextMarkers);
    }

    const onClick = useCallback(e => {
        setMarkerClicked(true);
        onChangeMarkerOn(true);
        },
        [markerClicked, onChangeMarkerOn],
    );

    useEffect(() => {
        setMarkerClicked(markerOn);
    }, [markerClicked]);

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCh2Dfsi0RTtFrKPTdMgTLWKgkT-MRRexg'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}
                onClick={addMarker}             
            >
            {
                markers.map(item => {
                    return (
                        <Marker 
                            key={item.name} 
                            position={item.position} 
                            onClick={onClick}
                        />
                    )
                })
            }
            </GoogleMap>
        </LoadScript>
    )
}
export default GoogleMapAPI;