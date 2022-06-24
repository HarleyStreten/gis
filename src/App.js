import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import MapComponent from "./Components/Map/MapComponent";
import ManagePanel from "./Components/ManagePanel/ManagePanel";
import Constructor from "./Components/ManagePanel/ConstructorPanel/Constructor/Constructor";
import MapTiler from "./Components/Map/MapTiler/MapTiler";
import Login from "./Components/Account/AccountDialog";
import DialogContent from "@mui/material/DialogContent";
import SignIn from "./Components/Account/Account";
import Calendar from "./Components/ManagePanel/Calendar/Calendar";

const App = () => {
    return (
        <div>
            <header>
                <Link to="/map">MapTiler</Link>
                <Link to="/manage">ManagePanel</Link>
                <Link to="/constructor">Constructor</Link>
            </header>

            <Routes>
                <Route path="/map/*" element={<MapComponent />}/>
                <Route path="/manage" element={<ManagePanel/>}/>
                <Route path="/constructor" element={<Constructor/>}/>
                <Route path="/login" element={<SignIn/>}/>
            </Routes>
        </div>
    );
}

export default App;
