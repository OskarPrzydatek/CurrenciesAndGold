import React from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import timeIntervalReducer from "../../../../reducers/timeIntervalReducer";
import TimePicker from "./components/TimePicker/TimePicker";
import GoldHistoryChart from "./components/GoldHistoryChart/GoldHistoryChart";

const timeIntervalState = {
    from: '',
    to: ''
}

const initTimeIntervalState = state => state;

export default function GoldHistory() {
    const [timeState, dispatch] = React.useReducer(timeIntervalReducer,
        timeIntervalState, initTimeIntervalState);

    return (
        <section>
            <header>
                <h1>Gold History Works!</h1>
                <p>Cena złota w czasie</p>
            </header>
            <main>
                <TimePicker dispatch={dispatch} />
                <GoldHistoryChart timeState={timeState} />
            </main>
            <BackButton/>
        </section>
    )
}
