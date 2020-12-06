import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapRead = ({ post }) => {

    const mapStyles = {
        margin:"50",
        height: "75vh",
        width: "100%"
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
            {post && <Marker 
                key={post.marker.name} 
                position={post.marker.position} 
            />}
            </GoogleMap>
        </LoadScript>
    )
}
export default GoogleMapRead;