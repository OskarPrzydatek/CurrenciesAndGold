import React from "react";
import useIsObjectEmpty from "../../../../../../hooks/useIsObjectEmpty";

export default function CurrencyAmountForm({dispatch, state}) {
    const currencyToConvert = useIsObjectEmpty(state.currencyToConvert);

    return (
        <>
            {currencyToConvert && <form>
                <label htmlFor="number-of-currencyToConvert">Podaj ilość {state.currencyToConvert.currency}</label>
                <input id="number-of-currencyToConvert"
                       type="number"
                       onChange={event => dispatch({type: 'INPUT_STATE', payload: event.target.value})}
                       onKeyPress={event => /[+\-.,e=]$/.test(event.key) && event.preventDefault()}
                       min={1} />
            </form>}
        </>
    );
}
