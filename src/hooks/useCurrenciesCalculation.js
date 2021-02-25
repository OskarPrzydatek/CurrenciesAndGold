import React from "react";

export default function useCurrenciesCalculation(currencyToConvert, resultCurrency, input) {
    const [inputState, setInputState] = React.useState(1);

    React.useEffect(() => {
        if (input !== null) {
            setInputState(input)
        }
    }, [input])

    let result = (currencyToConvert / resultCurrency) * inputState;

    return isNaN(result) ? null : result;
}
