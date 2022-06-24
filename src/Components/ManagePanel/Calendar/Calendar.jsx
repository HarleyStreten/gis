import React from 'react';
import { render } from 'react-dom';
import { DatePicker, DatePickerInput } from '@carbon/react';

const Calendar = () => (
<DatePicker dateFormat="d/m/Y" datePickerType="range" light>
    <DatePickerInput
        id="date-picker-range-start"
        placeholder="дд/мм/гггг"
        /*labelText="Начальная дата"*/
        type="text"
    />
    <DatePickerInput
        id="date-picker-range-end"
        placeholder="дд/мм/гггг"
        /*labelText="Конечная дата"*/
        type="text"
    />
</DatePicker>
);

export default Calendar;