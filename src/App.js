import './App.css';
import Map from "./Components/Map/Map";
import {BrowserRouter} from "react-router-dom";
import Information from "./Components/Information/Information";
import Gydroposts from "./Components/Gydroposts/Gydroposts";
import SearchBar from "./Components/Search/SearchBar";
import Login from "./Components/Account/AccountDialog";
import Geolocation from "./Components/Geolocation/Geolocation";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='settings'>
                    <div className='settings-item'><SearchBar/></div>
                    <div className='settings-item'><Information /></div>
                    <div className='settings-item'><Gydroposts/></div>
                    <div className='settings-item'><Geolocation/></div>
                    {/*<div className='settings-item'>Zoom</div>*/}
                </div>

                <div className='module-window'>
                    <Login/>
                </div>
                <Map/>
            </div>
        </BrowserRouter>
    );
}

export default App;
