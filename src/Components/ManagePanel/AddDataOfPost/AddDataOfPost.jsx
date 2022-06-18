import s from './AddDataOfPost.module.css';
import Parameter from "./Parameter/Parameter";
import Button from './../../../UI Components/Button/Button';

const AddDataOfPost = (props) => {

    return (
        <div className={s.AddDataPostBlock}>
            <div>
                <h3 className={s.head}>
                    Добавить данные
                </h3>
                <div className={s.headTwo}>
                    Добавление данных измерений уровня воды для текущего гидропоста
                </div>
            </div>
            <Parameter headParam="Дата" midParam="27.06.2022" endParam=""/>
            <Parameter headParam="Уровень воды" midParam="500" endParam="см"/>
            <Parameter headParam="Температура воздуха" midParam="500" endParam="°C"/>
            <Parameter headParam="Атмосферное давление" midParam="760" endParam="мм рт. ст."/>
            <Parameter headParam="Скорость ветра" midParam="2" endParam="м/с"/>
            <Parameter headParam="Толщина снежного покрова" midParam="58" endParam="см"/>
            <Parameter headParam="Количество осадков" midParam="500" endParam="мм"/>

            <div className={s.addDataButton}>
                <Button text="Добавить"/>
            </div>
        </div>
    );
}

export default AddDataOfPost;