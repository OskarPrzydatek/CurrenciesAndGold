import React from "react";
import useIsObjectEmpty from "../../../../../../hooks/useIsObjectEmpty";

export default function Answer({state, currencyCalculation, input}) {
    const currencyToConvert = useIsObjectEmpty(state.currencyToConvert);
    const resultCurrency = useIsObjectEmpty(state.resultCurrency);

    return (
        <article>
            {currencyToConvert &&
            <p>
                <span>{input ? input : '1'}</span> {state.currencyToConvert.currency}
            </p>}
            {resultCurrency && <p>w przeliczeniu na {state.resultCurrency.currency} wynosi:</p>}
            <p>{currencyCalculation} </p>
        </article>
    );
}
