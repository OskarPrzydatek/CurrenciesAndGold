import React from "react";
import "./TimePicker.scss";
import useTimeIntervalValidation from "../../../../../../hooks/gold/useTimeIntervalValidation";

export default function TimePicker({ dispatch }) {
    const [minDate, maxDate] = useTimeIntervalValidation()

    return (
        <form className="date-picker">
            <label className="date-picker__item">
                <span>Od dnia</span>
            <input type="date"
                   min={minDate}
                   max={maxDate}
                   onChange={event => dispatch({type: 'FROM', payload: event.target.value})}/>
            </label>
            <label className="date-picker__item">
                <span>Do dnia</span>
            <input type="date"
                   min={minDate}
                   max={maxDate}
                   onChange={event => dispatch({type: 'TO', payload: event.target.value})}/>
            </label>
        </form>
    );
}
