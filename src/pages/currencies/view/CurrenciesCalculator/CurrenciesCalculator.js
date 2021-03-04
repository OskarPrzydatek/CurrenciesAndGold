import React from "react";
import "./CurrenciesCalculator.scss";
import BackButton from "../../../../components/BackButton/BackButton";
import useCurrenciesTablesFetch from "../../../../hooks/currencies/useCurrenciesTablesFetch";
import useCurrenciesCalculation from "../../../../hooks/currencies/useCurrenciesCalculation";
import Select from "./components/Select/Select";
import calculatorReducer from "../../../../reducers/calculatorReducer";
import CurrencyAmountForm from "./components/CurrencyAmountForm/CurrencyAmountForm";
import Answer from "./components/Answer/Answer";
import CurrenciesLayoutTemplate from "../../CurrenciesLayoutTemplate";

const calculatorState = {
    currencyToConvert: {},
    resultCurrency: {},
    input: null
}

const initCalculatorState = state => state;

export default function CurrenciesCalculator({ url }) {
    const currencies = useCurrenciesTablesFetch();
    const [calculationState, dispatch] = React.useReducer(calculatorReducer,
        calculatorState, initCalculatorState)
    const currencyCalculation = useCurrenciesCalculation(calculationState.currencyToConvert.mid,
        calculationState.resultCurrency.mid, calculationState.input);

    return (
        <CurrenciesLayoutTemplate url={url}>
            <article className="currency-calculator">
                <header className="currency-calculator-header">
                    <h1>Kalkulator Walut</h1>
                    <p>Kalkulator umożliwiający przeliczanie walut</p>
                </header>
                <main className="currency-calculator-core">
                    <section className="currency-calculator-core__select">
                        <Select
                            currencies={currencies}
                            dispatch={dispatch}
                            type={'SET_CURRENCY_1'}
                            content={`Waluta wejściowa`}/>
                        <Select
                            currencies={currencies}
                            dispatch={dispatch}
                            type={'SET_CURRENCY_2'}
                            content={`Waluta wyjściowa`}/>
                    </section>
                    <CurrencyAmountForm
                        dispatch={dispatch}
                        calculationState={calculationState}/>
                    <Answer
                        calculationState={calculationState}
                        currencyCalculation={currencyCalculation}
                        input={calculationState.input}/>
                </main>
                <BackButton/>
            </article>
        </CurrenciesLayoutTemplate>
    )
}
