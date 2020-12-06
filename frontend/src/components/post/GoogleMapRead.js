import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapRead = ({ post }) => {

    const mapStyles = {
        margin:"50",
        height: "75vh",
        width: "100%"
    };

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCh2Dfsi0RTtFrKPTdMgTLWKgkT-MRRexg'>
            {post && <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={post.marker.position}            
            >
            {post && <Marker 
                key={post.marker.name} 
                position={post.marker.position} 
            />}
            </GoogleMap>}
        </LoadScript>
    )
}
export default GoogleMapRead;
