import React from "react";

export default function useGoldFetch() {
    const goldURL = `http://api.nbp.pl/api/cenyzlota`;

    const [gold, setGold] = React.useState({});

    React.useEffect(() => {
        // Gold data GET
        const fetchGold = async () => {
            const resGold = await fetch(goldURL);
            return resGold.json();
        }

        // Add gold data to state
        fetchGold().then(response => setGold(response[0]))
    }, [goldURL]);

    return gold;
}
