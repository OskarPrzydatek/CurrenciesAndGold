import React from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import useCurrenciesTable from "../../../../hooks/useCurrenciesTable";
import useCurrenciesCalculation from "../../../../hooks/useCurrenciesCalculation";
import Select from "./components/Select/Select";
import calculatorReducer from "../../../../reducers/calculatorReducer";
import CurrencyAmountForm from "./components/CurrencyAmountForm/CurrencyAmountForm";
import Answer from "./components/Answer/Answer";

export default function CurrenciesCalculator() {
    const calculatorState = {
        currencyToConvert: {},
        resultCurrency: {},
        input: null
    }

    const initCalculatorState = state => state;

    const currencies = useCurrenciesTable();
    const [state, dispatch] = React.useReducer(calculatorReducer, calculatorState, initCalculatorState)
    const currencyCalculation = useCurrenciesCalculation(state.currencyToConvert.mid, state.resultCurrency.mid, state.input);

/*
    console.log(state)
*/

    return (
        <section>
            <header>
                <h1>Kalkulator Walut</h1>
                <p>Opis dodam na koniec</p>
            </header>
            <main>
                <Select
                    currencies={currencies}
                    dispatch={dispatch}
                    type={'SET_CURRENCY_1'}
                    content={`Waluta wejściowa`}/>
                <CurrencyAmountForm
                    dispatch={dispatch}
                    state={state}/>
                <Select
                    currencies={currencies}
                    dispatch={dispatch}
                    type={'SET_CURRENCY_2'}
                    content={`Waluta wyjściowa`}/>
                <Answer
                    state={state}
                    currencyCalculation={currencyCalculation}
                    input={state.input}/>
            </main>
            <footer>
                <BackButton/>
            </footer>
        </section>
    )
}
