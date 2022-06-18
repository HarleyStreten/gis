import React, {Component} from 'react';
import s from './WaterLevels.module.css';
import Button from './../../../UI Components/Button/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class WaterLevels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

   render() {
       return (
           <div className={s.waterLevelsBlock}>
               <h3 className={s.head}>
                   Уровни воды
               </h3>

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


               <div className={s.underStroke}>
                   По умолчанию отображаются данные уровня воды за последние 7 дней
               </div>
               <div className={s.elementsPosition}>
                   <div className={s.buildButton}>
                       <Button text="Построить"/>
                   </div>
                   <div>
                       <button className={s.reloadButton}><RestartAltIcon fontSize="large"/>Обновить данные</button>
                   </div>
               </div>

           </div>
       );
   }
}

export default WaterLevels;