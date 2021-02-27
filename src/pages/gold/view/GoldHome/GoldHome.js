import React from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import useGold from "../../../../hooks/gold/useGold";
import GoldCalculations from "./components/GoldCalculations/GoldCalculations";

export default function GoldHome() {
    const gold = useGold();

    return (
        <section>
            <header>
                <h1>Złoto</h1>
                <p>Cena złota za gram z dnia {gold.data}</p>
            </header>
            <main>
                <GoldCalculations goldPrize={gold.cena} />
                <BackButton/>
            </main>
        </section>
    )
}
