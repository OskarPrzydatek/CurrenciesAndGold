import React from "react";
import "./CurrencyAmountForm.scss";
import useIsObjectEmpty from "../../../../../../hooks/useIsObjectEmpty";

export default function CurrencyAmountForm({dispatch, calculationState}) {
    const currencyToConvert = useIsObjectEmpty(calculationState.currencyToConvert);

    return (
        <>
            {currencyToConvert &&
            <form className="currency-amount-form">
                <label htmlFor="number-of-currencyToConvert">Podaj ilość
                    <span className="currency-amount-form__chosen">
                        &nbsp;{calculationState.currencyToConvert.currency}
                    </span>
                </label>
                <input id="number-of-currencyToConvert"
                       type="number"
                       className="currency-amount-form__input currency-amount-form__input-font"
                       onChange={event => dispatch({type: 'INPUT_STATE', payload: event.target.value})}
                       onKeyPress={event => /[+\-.,e=]$/.test(event.key) && event.preventDefault()}
                       min={1} />
            </form>}
        </>
    );
}
