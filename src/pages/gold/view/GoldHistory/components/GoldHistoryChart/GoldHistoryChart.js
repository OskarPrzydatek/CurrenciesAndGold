import React from "react";
import "./GoldHistory.scss";
import { Line } from "react-chartjs-2";
import useGoldHistory from "../../../../../../hooks/gold/useGoldHistory/useGoldHistory";

// Chart style
const chartColor = `#F2CD88`;
const options = {
    responsive: true,
    legend: {
        labels: {
            fontColor: chartColor
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: chartColor,
            },
            gridLines: {
                color: chartColor
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: chartColor,
            },
            gridLines: {
                color: chartColor
            }
        }]
    }
}

export default function GoldHistoryChart({timeState}) {
    const goldData = useGoldHistory(timeState.from, timeState.to);

    return (
        <div className="chart">
            <div className="chart__wrapper">
                {timeState.from && timeState.to !== "" &&
                <Line data={goldData} options={options} />}
            </div>
        </div>
    );
}
