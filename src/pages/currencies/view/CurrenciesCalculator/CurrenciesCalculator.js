import React from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import useCurrenciesTable from "../../../../hooks/useCurrenciesTable";
import useCurrenciesCalculation from "../../../../hooks/useCurrenciesCalculation";

export default function CurrenciesCalculator() {
    const currencies = useCurrenciesTable();

    // TODO: Reducer maybe?
    const [cur1, setCur1] = React.useState({});
    const [cur2, setCur2] = React.useState({});
    const [input, setInput] = React.useState(null);

    const currencyCalculation = useCurrenciesCalculation(cur1.mid, cur2.mid, input)

    // TODO: Divide to components!!!
    return (
        <section>
            <header>
                <h1>Currencies Calculator Works!</h1>
            </header>
            <main>
                <article>
                    <select defaultValue='zw' onChange={event => setCur1(JSON.parse(event.target.value))}>
                        <option value="zw" disabled hidden>Zmień walutę</option>
                        {currencies !== undefined && currencies.map(currency => (
                            <option
                                key={currency.code}
                                value={JSON.stringify(currency)}>
                                {currency.currency}
                                {currency.code}
                            </option>
                        ))}
                    </select>
                </article>


                <article>
                    <select defaultValue='nw' onChange={event => setCur2(JSON.parse(event.target.value))}>
                        <option value="nw" disabled hidden>Na walutę</option>
                        {currencies !== undefined && currencies.map(currency => (
                            <option
                                key={currency.code}
                                value={JSON.stringify(currency)}>
                                {currency.currency}
                                {currency.code}
                            </option>
                        ))}
                    </select>
                </article>

                <form>
                    <label htmlFor="number-of-currency1">Podaj ilość {cur1.currency}</label>
                    <input id="number-of-currency1"
                           type="number"
                           onChange={event => setInput(event.target.value)}/>
                </form>

                <article>
                    <p>{cur1.currency} w przeliczeniu na {cur2.currency} wynosi:</p>
                    <p>{currencyCalculation} </p>
                </article>
            </main>
            <footer>
                <BackButton/>
            </footer>
        </section>
    )
}
