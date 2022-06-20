import Information from "../Information/Information"
import Gydroposts from "../Gydroposts/Gydroposts";
import SearchBar from "../SearchBar/SearchBar";
import Login from "../Account/AccountDialog";
import Geolocation from "../Geolocation/Geolocation";
import Map from "./Map/Map";
import s from "./MapComponent.module.css";

const MapComponent = () => {
    return (
        <div>
            <div className={s.settings}>
                <div className={s.settingsItem}><SearchBar/></div>
                <div className={s.settingsItem}><Information/></div>
                <div className={s.settingsItem}><Gydroposts/></div>
                <div className={s.settingsItem}><Geolocation/></div>
            </div>

            <div className={s.moduleWindow}>
                <Login/>
            </div>
            <Map/>
        </div>

    );
}

export default MapComponent;
