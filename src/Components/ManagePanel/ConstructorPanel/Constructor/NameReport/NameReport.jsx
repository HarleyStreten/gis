import s from './NameReport.module.css';
import Input from "../../../../../UI Components/Input/Input";

const NameReport = () => {
    return (
        <div className={s.nameReportBlock}>
            <h3 className={s.head}>
                Название
            </h3>
            <Input placeHolder="Новый отчет, 27.06.2022"/>
        </div>
    );
}

export default NameReport;