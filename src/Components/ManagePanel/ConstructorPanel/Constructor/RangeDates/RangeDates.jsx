import s from './RangeDates.module.css';
import React, {Component} from "react";
import {DateRangePicker} from "react-dates";
import CheckboxConstructor from "../../../../../UI Components/CheckboxConstructor/CheckboxConstructor";

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
                <div className={s.checkBoxReport}>
                    <CheckboxConstructor name="Отчет на один день"/>
                </div>
            </div>
        );
    }
}

export default RangeDates;