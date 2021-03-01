import React from "react";

export default function useGoldHistoryFetch(from, to) {
    const URL = `http://api.nbp.pl/api/cenyzlota/${from}/${to}`;
    const [goldPrizes, setGoldPrizes] = React.useState([]);
    const [goldDates, setGoldDates] = React.useState([]);

    React.useEffect(() => {
        if (from !== '' && to !== '') {
            setGoldPrizes([]);
            setGoldDates([]);

            const fetchGoldHistoryData = async () => {
                const resGoldHistory = await fetch(URL);
                return resGoldHistory.json();
            }

            fetchGoldHistoryData().then(response => {
                for (let dataObj of response) {
                    setGoldPrizes(prev => [...prev, dataObj.cena])
                    setGoldDates(prev => [...prev, dataObj.data])
                }
            });
        }
    }, [URL, from, to]);

    return [goldDates, goldPrizes];
}
