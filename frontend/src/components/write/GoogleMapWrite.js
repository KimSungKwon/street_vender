import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapWrite = ({ onChangeField, marker, title, user, markerOn }) => {
    const [markers, setMarkers] = useState([]);

    const mapStyles = {        
        height: "75vh",
        width: "75%"
    };
    const defaultCenter = {
        lat: 37.496281, lng: 126.957390
    };

    const onLoad = () => {
        const marker = {
            name: title,
            position: markerOn.position,
        }
        onChangeField({ key: 'marker', value: marker });
    }


    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCh2Dfsi0RTtFrKPTdMgTLWKgkT-MRRexg'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}             
            >

            {markerOn && 
                <Marker 
                    key={title} 
                    position={markerOn.position}
                    onLoad={onLoad}  
                />
            }
            </GoogleMap>
        </LoadScript>
    )
}
export default GoogleMapWrite;