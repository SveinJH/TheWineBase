import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const Map = (props) => {
    const [viewport, setViewport] = useState({
        latitude: props.lat,
        longitude: props.long,
        zoom: 11,
    });

    return (
        <ReactMapGL
            {...viewport}
            width={400}
            height={400}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken={process.env.REACT_APP_MB_KEY}
            onViewportChange={(viewport) => {
                const { latitude, longitude, zoom } = viewport;
                setViewport({
                    latitude,
                    longitude,
                    zoom,
                });
            }}
        >
            <Popup
                latitude={props.lat}
                longitude={props.long}
                closeButton={false}
            >
                <div style={{ fontSize: '1.5rem' }}>{props.name}</div>
            </Popup>
        </ReactMapGL>
    );
};

export default Map;
