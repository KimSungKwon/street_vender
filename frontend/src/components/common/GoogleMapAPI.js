import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapAPI = () => {
    const [markers, setMarkers] = useState([]);

    const mapStyles = {        
        height: "100vh",
        width: "100%"
    };
    const defaultCenter = {
        lat: 37.496281, lng: 126.957390
    };

    const addMarker = (e) => {
        const marker = {
            name: `www`,
            position: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        }
        const nextMarkers = [...markers, marker];
        setMarkers(nextMarkers);
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
            {
                markers.map(item => {
                    return (
                        <Marker key={item.name} position={item.position} />
                    )
                })
            }
            </GoogleMap>
        </LoadScript>
    )
}
export default GoogleMapAPI;