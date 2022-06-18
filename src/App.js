import './App.css';
import Map from "./Components/Map/Map";
import {Routes, Route, Link} from "react-router-dom";
import Information from "./Components/Information/Information";
import Gydroposts from "./Components/Gydroposts/Gydroposts";
import SearchBar from "./Components/SearchBar/SearchBar";
import Login from "./Components/Account/AccountDialog";
import Geolocation from "./Components/Geolocation/Geolocation";
import ManagePanel from "./Components/ManagePanel/ManagePanel";

const App = () => {
    return (
/*        <div className="App">

            <div className='settings'>
                <div className='settings-item'><SearchBar/></div>
                <div className='settings-item'><Information/></div>
                <div className='settings-item'><Gydroposts/></div>
                <div className='settings-item'><Geolocation/></div>
            </div>

            <div className='module-window'>
                <Login/>
            </div>

            <div className='manage-panel-button'>
                <Link to="/manage">ManagePanel</Link>
            </div>

            <Map />

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/manage" element={<ManagePanel/>}/>
            </Routes>

        </div>*/

        <div>
            <ManagePanel/>
        </div>
    );
}

export default App;
