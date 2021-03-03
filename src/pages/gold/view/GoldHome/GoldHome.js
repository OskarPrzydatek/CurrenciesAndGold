import React from "react";
import "./GoldHome.scss";
import BackButton from "../../../../components/BackButton/BackButton";
import useGoldFetch from "../../../../hooks/gold/useGoldFetch";
import GoldCalculations from "./components/GoldCalculations/GoldCalculations";

export default function GoldHome() {
    const gold = useGoldFetch();

    return (
        <article className="gold-home">
            <header className="gold-home__header">
                <h1>Złoto</h1>
                <p>Cena złota za gram z dnia {gold.data}</p>
            </header>
            <main className="gold-home__main">
                <GoldCalculations goldPrize={gold.cena} />
                <BackButton/>
            </main>
        </article>
    )
}
