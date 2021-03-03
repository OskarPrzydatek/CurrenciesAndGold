import React from "react";

export default function useGoldChartData(goldDates, goldPrizes) {
    const [goldChartData, setGoldChartData] = React.useState({});

    // Set data for chart Line component
    // in special format
    React.useEffect(() => {
        setGoldChartData({
            labels: goldDates,
            datasets: [{
                label: 'Cena złota',
                data: goldPrizes,
                fill: false,
                borderColor: `#F2CD88`,
                pointBackgroundColor: `#F2CD88`,
            }]
        })
    }, [goldDates, goldPrizes]);

    return goldChartData;
}
