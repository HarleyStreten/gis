import s from './Constructor.module.css';
import HeaderConstructor from "./HeaderConstructor/HeaderConstructor";
import Button from "../../../../UI Components/Button/Button";
import RangeDates from "./RangeDates/RangeDates";
import ConstructorChooseBlock from "./ConstructorChooseDates/ConstructorChooseBlock";
import NameReport from "./NameReport/NameReport";

const Constructor = () => {
    return (
        <div className={s.constructor}>
            <div className={s.header}>
                <HeaderConstructor/>
            </div>
            <div className={s.areaOne}>
                <RangeDates/>
            </div>
            <div className={s.areaTwo}>
                <ConstructorChooseBlock/>
            </div>
            <div className={s.areaThree}>
                <NameReport/>
            </div>
            <div className={s.footer}>
                <div className={s.createReportButton}>
                    <Button text="Сформировать"/>
                </div>
            </div>
        </div>
    );
}

export default Constructor;