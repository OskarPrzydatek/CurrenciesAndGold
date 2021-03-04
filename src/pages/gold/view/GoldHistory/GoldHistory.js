import React from "react";
import "./GoldHistory.scss";
import BackButton from "../../../../components/BackButton/BackButton";
import timeIntervalReducer from "../../../../reducers/timeIntervalReducer";
import TimePicker from "./components/TimePicker/TimePicker";
import GoldHistoryChart from "./components/GoldHistoryChart/GoldHistoryChart";
import GoldLayoutTemplate from "../../GoldLayoutTemplate";

const timeIntervalState = {
    from: '',
    to: ''
}

const initTimeIntervalState = state => state;

export default function GoldHistory({ url }) {
    const [timeState, dispatch] = React.useReducer(timeIntervalReducer,
        timeIntervalState, initTimeIntervalState);

    return (
        <GoldLayoutTemplate url={url}>
            <article className="gold-history">
                <header className="gold-history__header">
                    <h1>Cena złota w czasie</h1>
                    <p>Ceny złota dostępne w okresie 367 dni do dnia dzisiejszego</p>
                </header>
                <main className="gold-history__main">
                    <TimePicker dispatch={dispatch}/>
                    <GoldHistoryChart timeState={timeState}/>
                </main>
                <BackButton/>
            </article>
        </GoldLayoutTemplate>
    )
}
