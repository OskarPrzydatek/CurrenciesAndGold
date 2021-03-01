import useGoldHistoryFetch from "./hooks/useGoldHistoryFetch";
import useGoldChartData from "./hooks/useGoldChratData";

export default function useGoldHistory(from, to) {
    const [goldDates, goldPrizes] = useGoldHistoryFetch(from, to);
    return useGoldChartData(goldDates, goldPrizes);
}
