import React from "react";
import useTimeIntervalValidation from "../../../../../../hooks/gold/useTimeIntervalValidation";

export default function TimePicker({ dispatch }) {
    const [minDate, maxDate] = useTimeIntervalValidation()

    return (
        <form>
            <label htmlFor="">Od dnia</label>
            <input type="date"
                   min={minDate}
                   max={maxDate}
                   onChange={event => dispatch({type: 'FROM', payload: event.target.value})}/>
            <label htmlFor="">Do dnia</label>
            <input type="date"
                   min={minDate}
                   max={maxDate}
                   onChange={event => dispatch({type: 'TO', payload: event.target.value})}/>
        </form>
    );
}
