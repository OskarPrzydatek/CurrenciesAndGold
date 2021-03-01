import React from "react";
import { Line } from "react-chartjs-2";
import useGoldHistory from "../../../../../../hooks/gold/useGoldHistory/useGoldHistory";

export default function GoldHistoryChart({ timeState }) {
    const goldData = useGoldHistory(timeState.from, timeState.to);

    return (
        <div className="chart">
            {timeState.from && timeState.to !== "" && <Line data={goldData}/>}
        </div>
    );
}
