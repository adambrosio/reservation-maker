import DatePicker from "react-datepicker";
import React, { useState } from "react";

function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
};

export default Calendar;