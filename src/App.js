import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import MapComponent from "./Components/Map/MapComponent";
import ManagePanel from "./Components/ManagePanel/ManagePanel";
import Constructor from "./Components/ManagePanel/ConstructorPanel/Constructor/Constructor";
import HeaderConstructor
    from "./Components/ManagePanel/ConstructorPanel/Constructor/HeaderConstructor/HeaderConstructor";


const App = () => {
    return (
        <div>
            <header>
                <Link to="/map">Map</Link>
                <Link to="/manage">ManagePanel</Link>
                <Link to="/constructor">Constructor</Link>
            </header>

            <Routes>
                <Route path="/map" element={<MapComponent/>}/>
                <Route path="/manage" element={<ManagePanel/>}/>
                <Route path="/constructor" element={<Constructor/>}/>
            </Routes>
        </div>
    );
}

export default App;
