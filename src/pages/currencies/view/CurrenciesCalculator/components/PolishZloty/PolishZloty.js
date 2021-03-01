import React from "react";

export default function PolishZloty() {
    const PLNRate = {
        currency: 'złoty (Polska)',
        code: "PLN",
        mid: 1
    }

    return <option value={JSON.stringify(PLNRate)}>{PLNRate.currency}</option>;
}
