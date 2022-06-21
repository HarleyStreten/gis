import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import s from './MapTiler.module.css';
import usePosts from "../../../Api/hooks/usePosts";
import MenuItem from "@mui/material/MenuItem";


export default function MapTiler() {
    const posts = usePosts();
    const [showPopup, setShowPopup] = React.useState(true);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(56.364);
    const [lat] = useState(54.15);
    const [zoom] = useState(6);
    const [API_KEY] = useState('C3Y2Al7wh2EFQbSuZ926');

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([57.941139, 56.023038])
            .addTo(map.current);
        new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([55.753263, 53.420038])
            .addTo(map.current);
        new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([55.714494, 54.38763])
            .addTo(map.current);
        new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([58.272553, 53.864635])
            .addTo(map.current);
        new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([55.426604, 55.520979])
            .addTo(map.current);
    });

    return (
        <div className={s.mapWrap}>
            <div ref={mapContainer} className={s.map} />
        </div>
    );
}

/*
posts?.map( ({ location }) => (key={id} {location.longitude} {location.latitude}))
*/
