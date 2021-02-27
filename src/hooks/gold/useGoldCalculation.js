import React from "react";

export default function useGoldCalculation(input, goldPrise) {
    const [goldAmount, setGoldAmount] = React.useState(1);

    React.useEffect(() => {
        if (input > 1) {
            setGoldAmount(input)
        } else {
            setGoldAmount(1)
        }
    }, [input]);

    const result = goldAmount * goldPrise;

    return isNaN(result) ? null : result;
}
