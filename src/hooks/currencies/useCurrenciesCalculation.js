import React from "react";

export default function useCurrenciesCalculation(currencyToConvert, resultCurrency, input) {
    const [currencyAmount, setCurrencyAmount] = React.useState(1);

    React.useEffect(() => {
        // input > 1 let us set input value
        // and protect us from blank input value
        if (input > 1) {
            setCurrencyAmount(input)
        } else {
            // if input is empty
            setCurrencyAmount(1)
        }
    }, [input])

    const result = (currencyToConvert / resultCurrency) * currencyAmount;

    return isNaN(result) ? null : result;
}
