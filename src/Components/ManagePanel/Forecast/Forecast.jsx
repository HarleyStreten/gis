import React, {Component} from 'react';
import s from './Forecast.module.css';
import Checkbox from "./ParameterForecast/Checkbox";
import Button from "../../../UI Components/Button/Button";
import {DateRangePicker} from "react-dates";

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
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({startDate, endDate}) => this.setState({
                            startDate,
                            endDate
                        })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({focusedInput})} // PropTypes.func.isRequired,
                    />
                </div>
                <div className={s.makeForecast}>
                    <Button text="Выполнить прогноз"/>
                </div>
            </div>
        );
    }
}

export default Forecast;