import React from "react";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

import { RMap, ROSM } from "rlayers";

const center = fromLonLat([56.364, 54.15]);

const Map = () => {
    return (
        <RMap width={"100vw"} height={"100vh"} initial={{ center: center, zoom: 7 }}>
            <ROSM />
        </RMap>
    );
}
export default Map;