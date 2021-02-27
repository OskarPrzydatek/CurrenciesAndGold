import React from "react";

export default function useGold() {
    const goldURL = `http://api.nbp.pl/api/cenyzlota`;

    const [gold, setGold] = React.useState({});

    React.useEffect(() => {
        const fetchGold = async () => {
            const resGold = await fetch(goldURL);
            return resGold.json();
        }

        fetchGold().then(response => setGold(response[0]))
    }, [goldURL]);

    return gold;
}
