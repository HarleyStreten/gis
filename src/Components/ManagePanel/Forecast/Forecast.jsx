import React, {Component} from 'react';
import s from './Forecast.module.css';
import Checkbox from "./ParameterForecast/Checkbox";
import Button from "../../../UI Components/Button/Button";
import {DateRangePicker} from "react-dates";
import Calendar from "../Calendar/Calendar";

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

    render() {
        return (
            <div>
                <h3 className={s.head}>
                    Выполнить прогноз
                </h3>
                <h4 className={s.headTwo}>
                    Параметры прогноза
                </h4>

                <Checkbox name="Прогноз от текущей даты"/>
                <Checkbox name="С учетом температуры"/>
                <Checkbox name="По всем постам"/>

                <div className={s.boxCalendar}>
                    <div className={s.daysForecast}>
                        Дни прогноза
                    </div>
                    <div className={s.calendar}>
                        <Calendar/>
                    </div>
                </div>
                <div className={s.makeForecast}>
                    <Button text="Выполнить прогноз"/>
                </div>
            </div>
        );
    }
}

export default Forecast;