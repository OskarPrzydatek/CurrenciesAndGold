import React from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import useGold from "../../../../hooks/gold/useGold";
import useGoldCalculation from "../../../../hooks/gold/useGoldCalculation";

export default function GoldHome() {
    const gold = useGold();
    const [input, setInput] = React.useState(null);
    const goldCalculation = useGoldCalculation(input, gold.cena)

    return (
        <section>
            <header>
                <h1>Złoto</h1>
                <p>Opis dodam potem</p>
            </header>
            <main>
                <form>
                    <label htmlFor="gold">Ilość gramów złota do przeliczenia</label>
                    <input id="gold"
                           type="number"
                           onChange={event => setInput(event.target.value)}
                           onKeyPress={event => /[+\-.,e=]$/.test(event.key) && event.preventDefault()}
                           min={1}/>
                </form>
                <p>Cena za {input ? input : '1'} g wynosi {goldCalculation} PLN</p>
                <BackButton/>
            </main>
        </section>
    )
}
