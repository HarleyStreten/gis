import s from './ConstructorChooseBlock.module.css';
import ConstructorChooseParameter from "./ConstructorChooseParameter/ConstructorChooseParameter";
import CheckboxConstructor from "../../../../../UI Components/CheckboxConstructor/CheckboxConstructor";

const ConstructorChooseBlock = (props) => {

    return (
        <div className={s.constructorChooseDatesBlock}>
            <div>
                <div className={s.headElemenents}>
                    <h3 className={s.head}>
                        Выбор параметров
                    </h3>
                    <div className={s.checkboxAll}>
                        <CheckboxConstructor name="Выбрать все"/>
                    </div>
                </div>
                <div className={s.headTwo}>
                    Каждый параметр может отображаться в отчете под удобным для Вас названием. При необходимости Вы можете переименовать его
                </div>
            </div>
            <ConstructorChooseParameter headParam="Название водного объекта" midParam="Название водного объекта"/>
            <ConstructorChooseParameter headParam="ID Гидропоста" midParam="ID Гидропоста"/>
            <ConstructorChooseParameter headParam="Температура воздуха, °C" midParam="Температура воздуха, °C"/>
            <ConstructorChooseParameter headParam="Уровень воды, см" midParam="Уровень воды, см"/>
            <ConstructorChooseParameter headParam="Прогноз, см" midParam="Прогноз, см"/>
            <ConstructorChooseParameter headParam="Опасный уровень поймы, см" midParam="Опасный уровень поймы, см"/>
            <ConstructorChooseParameter headParam="Точность прогноза, %" midParam="Точность прогноза, %"/>
            <ConstructorChooseParameter headParam="Уровень затопления, см" midParam="Уровень затопления, см"/>
            <ConstructorChooseParameter headParam="Изменения уровня за сутки" midParam="Изменения уровня за сутки"/>
        </div>
    );
}

export default ConstructorChooseBlock;