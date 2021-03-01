import React from "react";
import useIsObjectEmpty from "../../../../../../hooks/useIsObjectEmpty";

export default function Answer({calculationState, currencyCalculation, input}) {
    const resultCurrency = useIsObjectEmpty(calculationState.resultCurrency);

    return (
        <article>
            {resultCurrency &&
                <div className="calculation-result">
                    <p>{input ? input : '1'} {calculationState.currencyToConvert.code} = {currencyCalculation} {calculationState.resultCurrency.code}</p>
                </div>
            }
        </article>
    );
}
