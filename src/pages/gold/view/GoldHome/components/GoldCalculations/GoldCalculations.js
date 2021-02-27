import React from "react";
import useGoldCalculation from "../../../../../../hooks/gold/useGoldCalculation";

export default function GoldCalculations({ goldPrize }) {
    const [input, setInput] = React.useState(null);
    const goldCalculation = useGoldCalculation(input, goldPrize)

    return (
        <article>
            <form>
                <label htmlFor="gold">Ilość gramów złota do przeliczenia</label>
                <input id="gold"
                       type="number"
                       onChange={event => setInput(event.target.value)}
                       onKeyPress={event => /[+\-.,e=]$/.test(event.key) && event.preventDefault()}
                       min={1} />
            </form>
            <p>Cena za {input ? input : '1'}g wynosi {goldCalculation} PLN</p>
        </article>
    );
}
