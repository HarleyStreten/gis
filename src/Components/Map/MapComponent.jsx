import Information from "../Information/Information"
import Gydroposts from "../Gydroposts/Gydroposts";
import SearchBar from "../SearchBar/SearchBar";
import Login from "../Account/AccountDialog";
import Geolocation from "../Geolocation/Geolocation";
import Map from "./Map/Map";
import s from "./MapComponent.module.css";
import {Link, Route, Routes} from "react-router-dom";
import ManagePanel from "../ManagePanel/ManagePanel";
import Constructor from "../ManagePanel/ConstructorPanel/Constructor/Constructor";
import MapTiler from "./MapTiler/MapTiler";

const MapComponent = () => {
    return (
        <div>
            <div className={s.settings}>
                <div className={s.settingsItem}><SearchBar/></div>
                <div className={s.settingsItem}><Information/></div>
                <div className={s.settingsItem}><Gydroposts/></div>
                <div className={s.settingsItem}><Geolocation/></div>
                <div className={s.settingsItem}><Login><Link to="/login"/></Login></div>
            </div>

{/*            <div className={s.moduleWindow}>
                <Login/>
            </div>

            <Routes>
                <Route path="/map/*" element={<MapComponent />}/>

            </Routes>*/}
            <MapTiler />
        </div>

    );
}

export default MapComponent;
