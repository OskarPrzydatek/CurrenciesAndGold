import React from "react";
import {Line} from "react-chartjs-2";
import BackButton from "../../../../components/BackButton/BackButton";
import timeIntervalReducer from "../../../../reducers/timeIntervalReducer";
import useGoldHistory from "../../../../hooks/gold/useGoldHistory/useGoldHistory";

export default function GoldHistory() {
    const timeIntervalState = {
        from: '',
        to: ''
    }

    const initTimeIntervalState = state => state;

    const [state, dispatch] = React.useReducer(timeIntervalReducer,
        timeIntervalState, initTimeIntervalState);
    const goldData = useGoldHistory(state.from, state.to);

    return (
        <section>
            <header>
                <h1>Gold History Works!</h1>
                <p>Cena złota w czasie</p>
            </header>
            <main>
                <form>
                    <label htmlFor="">Od dnia</label>
                    <input type="date"
                           onChange={event => dispatch({type: 'FROM', payload: event.target.value})}/>
                    <label htmlFor="">Do dnia</label>
                    <input type="date"
                           onChange={event => dispatch({type: 'TO', payload: event.target.value})}/>
                </form>
                <div className="chart">
                    {state.from && state.to !== "" && <Line data={goldData}/>}
                </div>
            </main>
            <BackButton/>
        </section>
    )
}
