import React, {useRef, useEffect, useState} from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import maplibregl from '!maplibre-gl';
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
            style: `https://api.maptiler.com/maps/openstreetmap/style.json?key=C3Y2Al7wh2EFQbSuZ926`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Popup({closeOnClick: false})
            .setLngLat([56.364, 54.15])
            .setHTML('<h1>Hello World!</h1>')
            .addTo(map.current);
    });

    posts?.map(({type, location}) => {
        if (type === "hydro") {
            new maplibregl.Marker({color: "#49A8B7"})
                .setLngLat([location.longitude, location.latitude])
                .addTo(map.current)
        } else {
            new maplibregl.Marker({color: "#FF0000"})
                .setLngLat([location.longitude, location.latitude])
                .addTo(map.current)
        }
    });



    /*    debugger;
        map.current.on('load', function (){
            map.current.addSource('places', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                                'icon': 'theatre'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-77.038659, 38.931567]
                            }
                        }
                    ]
                }
                }
            )
        });



        map.current.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
                'icon-image': '{icon}_15',
                'icon-overlap': 'always'
            }
        });

        map.current.on('click', 'places', function (e) {
            let coordinates = e.features[0].geometry.coordinates.slice();
            let description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new maplibregl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.current.on('mouseenter', 'places', function () {
            map.current.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.current.on('mouseleave', 'places', function () {
            map.current.getCanvas().style.cursor = '';
        });*/

    /*
        posts?.map( ({location}) => (new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([location.longitude, location.latitude])
            .addTo(map.current)));*/

    return (
        <div className={s.mapWrap}>
            <div ref={mapContainer} className={s.map}/>
        </div>
    );
}

/*
posts?.map( ({ location }) => (key={id} {location.longitude} {location.latitude}))
*/
