import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css')

function DateTimePicker(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
    id={props.id}
    selected={startDate}
    onChange={date => setStartDate(date)}
    showTimeSelect
    timeFormat="p"
    timeIntervals={15}
    dateFormat="Pp"
    />
  )
}

export default DateTimePicker;
