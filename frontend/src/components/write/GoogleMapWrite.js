import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapWrite = ({ onChangeField, title, adMarkerOn, markerOn }) => {
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
    const onAdLoad = () => {
        const marker = {
            name: title,
            position: adMarkerOn.position,
        }
        onChangeField({ key: 'marker', value: marker });
    }

    const dragMarker = (e) => {
        const newMarker = {
            name: title,
            position: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            }
        }
        onChangeField({ key: 'marker', value: newMarker });
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
                    position={markerOn.marker.position}
                    draggable={true}
                    onLoad={onLoad}
                    onDragEnd={dragMarker}  
                />
            }
            {adMarkerOn && 
                <Marker 
                    key={title} 
                    position={adMarkerOn.position}
                    draggable={true}
                    onLoad={onAdLoad}
                    onDragEnd={dragMarker}  
                />
            }
            </GoogleMap>
        </LoadScript>
    )
}
export default GoogleMapWrite;