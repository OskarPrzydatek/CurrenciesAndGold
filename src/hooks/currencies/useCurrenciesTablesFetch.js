import React from "react";

export default function useCurrenciesTablesFetch() {
    const TableAUrl = `http://api.nbp.pl/api/exchangerates/tables/a`;
    const TableBUrl = `http://api.nbp.pl/api/exchangerates/tables/b`;

    const [currencies, setCurrencies] = React.useState([]);

    React.useEffect(() => {
        // A Table GET
        const fetchAData = async () => {
            const resA = await fetch(TableAUrl);
            return resA.json();
        }

        // B Table GET
        const fetchBData = async () => {
            const resB = await fetch(TableBUrl);
            return resB.json();
        }

        // Add two tables to state
        fetchAData().then(response => setCurrencies(prev => [...prev, response[0].rates]));
        fetchBData().then(response => setCurrencies(prev => [...prev, response[0].rates]));
    }, [TableAUrl, TableBUrl]);

    // Return as one table
    if (currencies.length !== 0) {
        return currencies.reduce((prev, next) => prev.concat(next));
    }
}
