import React, { useState } from 'react';
import StaticMap, { Marker, Popup } from 'react-map-gl';

const Map = props => {
    const [viewport, setViewport] = useState({
        latitude: props.lat,
        longitude: props.long,
        zoom: 10
    });

    return (
        <StaticMap
            {...viewport}
            width={350}
            height={350}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken={process.env.REACT_APP_MB_KEY}
        >
            {/* <Marker
                latitude={props.lat}
                longitude={props.long}
                offsetLeft={-20}
                offsetTop={-10}
            >
                {props.name}
            </Marker> */}
            <Popup
                latitude={props.lat}
                longitude={props.long}
                closeButton={false}
            >
                <div style={{ fontSize: '1.4rem' }}>{props.name}</div>
            </Popup>
        </StaticMap>
    );
};

export default Map;
