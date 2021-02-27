import React from "react";

export default function useGoldCalculation(input, goldPrise) {
    const [goldAmount, setGoldAmount] = React.useState(1);

    React.useEffect(() => {
        if (input > 1) {
            // set input if is no empty
            setGoldAmount(input)
        } else {
            // if input is empty
            setGoldAmount(1)
        }
    }, [input]);

    const result = goldAmount * goldPrise;

    return isNaN(result) ? null : result.toFixed(2);
}
