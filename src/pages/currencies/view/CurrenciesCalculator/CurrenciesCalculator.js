import React from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import useCurrenciesTablesFetch from "../../../../hooks/currencies/useCurrenciesTablesFetch";
import useCurrenciesCalculation from "../../../../hooks/currencies/useCurrenciesCalculation";
import Select from "./components/Select/Select";
import calculatorReducer from "../../../../reducers/calculatorReducer";
import CurrencyAmountForm from "./components/CurrencyAmountForm/CurrencyAmountForm";
import Answer from "./components/Answer/Answer";

const calculatorState = {
    currencyToConvert: {},
    resultCurrency: {},
    input: null
}

const initCalculatorState = state => state;

export default function CurrenciesCalculator() {
    const currencies = useCurrenciesTablesFetch();
    const [calculationState, dispatch] = React.useReducer(calculatorReducer,
        calculatorState, initCalculatorState)
    const currencyCalculation = useCurrenciesCalculation(calculationState.currencyToConvert.mid,
        calculationState.resultCurrency.mid, calculationState.input);

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
                    calculationState={calculationState}/>
                <Select
                    currencies={currencies}
                    dispatch={dispatch}
                    type={'SET_CURRENCY_2'}
                    content={`Waluta wyjściowa`}/>
                <Answer
                    calculationState={calculationState}
                    currencyCalculation={currencyCalculation}
                    input={calculationState.input}/>
                <BackButton/>
            </main>
        </section>
    )
}
