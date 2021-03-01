import useGoldHistoryFetch from "./hooks/useGoldHistoryFetch";
import useGoldChartData from "./hooks/useGoldChratData";

/**
 * Facade which make usage more friendly
 * */
export default function useGoldHistory(from, to) {
    const [goldDates, goldPrizes] = useGoldHistoryFetch(from, to);
    return useGoldChartData(goldDates, goldPrizes);
}
