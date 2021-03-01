import React from "react";

/**
 * Hook for create data needed for chart format
 * */
export default function useGoldHistoryFetch(from, to) {
    const URL = `http://api.nbp.pl/api/cenyzlota/${from}/${to}`;
    const [goldPrizes, setGoldPrizes] = React.useState([]);
    const [goldDates, setGoldDates] = React.useState([]);

    React.useEffect(() => {
        if (from !== '' && to !== '') {
            // State clean if we change date
            // by date picker
            setGoldPrizes([]);
            setGoldDates([]);

            // GET data from API
            const fetchGoldHistoryData = async () => {
                const resGoldHistory = await fetch(URL);
                return resGoldHistory.json();
            }

            // Set all data from API
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
