import React from "react";
import "./Answer.scss";
import useIsObjectEmpty from "../../../../../../hooks/useIsObjectEmpty";

export default function Answer({calculationState, currencyCalculation, input}) {
    const resultCurrency = useIsObjectEmpty(calculationState.resultCurrency);

    return (
        <>
            {resultCurrency &&
                <div className="calculation-result">
                    <p>{input ? input : '1'}&nbsp;
                    {calculationState.currencyToConvert.code} = {currencyCalculation}&nbsp;
                    {calculationState.resultCurrency.code}</p>
                </div>
            }
        </>
    );
}
