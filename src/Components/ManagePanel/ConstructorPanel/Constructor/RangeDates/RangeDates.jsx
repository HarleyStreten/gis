import s from './RangeDates.module.css';
import React, {Component} from "react";
import {DateRangePicker} from "react-dates";
import CheckboxConstructor from "../../../../../UI Components/CheckboxConstructor/CheckboxConstructor";
import Calendar from "../../../Calendar/Calendar";

class RangeDates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

    render() {
        return (
            <div className={s.rangeDatesBlock}>
                <h3 className={s.head}>
                    Диапазон дат
                </h3>
                <div className={s.headTwo}>
                    Выберите начальную и конечную дату
                </div>
                <Calendar/>
                <div className={s.checkBoxReport}>
                    <CheckboxConstructor name="Отчет на один день"/>
                </div>
            </div>
        );
    }
}

export default RangeDates;