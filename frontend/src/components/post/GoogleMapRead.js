import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapRead = ({ post }) => {

    const mapStyles = {        
        height: "75vh",
        width: "75%"
    };
    const defaultCenter = {
        lat: 37.496281, lng: 126.957390
    };

    // const { marker } = post; 

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCh2Dfsi0RTtFrKPTdMgTLWKgkT-MRRexg'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}            
            >
            </GoogleMap>
        </LoadScript>
    )
}
export default GoogleMapRead;