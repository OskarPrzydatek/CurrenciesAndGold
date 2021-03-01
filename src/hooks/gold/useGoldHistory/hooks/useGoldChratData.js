import React from "react";

export default function useGoldChartData(goldDates, goldPrizes) {
    const [goldChartData, setGoldChartData] = React.useState({});

    React.useEffect(() => {
        setGoldChartData({
            labels: goldDates,
            datasets: [{
                label: 'Cena złota',
                data: goldPrizes
            }]
        })
    }, [goldDates, goldPrizes]);

    return goldChartData;
}
