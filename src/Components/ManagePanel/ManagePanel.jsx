import {Link, Route, Routes} from "react-router-dom";
import s from './ManagePanel.module.css';
import WaterLevels from "./WaterLevels/WaterLevels";
import ConstructorPanel from "./ConstructorPanel/ConstructorPanel";
import AddDataOfPost from "./AddDataOfPost/AddDataOfPost";
import Forecast from "./Forecast/Forecast";
import Header from "./Header/Header";

const ManagePanel = () => {
    return (
        <div className={s.managePanel}>
            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.areaOne}>
                <div>
                    <WaterLevels/>
                </div>
            </div>
            <div className={s.areaTwo}>
                <ConstructorPanel/>
            </div>
            <div className={s.areaThree}>
                <AddDataOfPost/>
            </div>
            <div className={s.areaFour}>
                <Forecast/>
            </div>
            <div className={s.footer}>
                <img className={s.footerImage} src="https://alfakom.uz/images/img/partners/ugatu_3.jpg"/>
            </div>
        </div>
    );
}

export default ManagePanel;