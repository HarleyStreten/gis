import s from './ConstructorPanel.module.css';
import Button from "../../../UI Components/Button/Button";
import ButtonOutline from "../../../UI Components/ButtonOutline/ButtonOutline";

const ConstructorPanel = () => {
    return (
        <div>
            <h3 className={s.head}>
                Конструктор отчетов
            </h3>
            <div className={s.headTwo}>
                Формирование отчетов для выгрузки статистики и проведения сравнительного анализа
            </div>
            <div className={s.elementsPosition}>
                <div>
                    <Button text="Открыть"/>
                </div>
                <div className={s.cancelSubscribe}>
                    <ButtonOutline text="Отменить рассылку отчета"/>
                </div>
            </div>
        </div>
    );
}

export default ConstructorPanel;