import React from "react";
import BackButton from "../../../components/BackButton/BackButton";
import useCurrenciesTable from "../../../hooks/useCurrenciesTable";
import PaginationPagesBar from "../components/PaginationPagesBar/PaginationPagesBar";
import CurrenciesPaginatedTable from "../components/CurrenciesPaginatedTable/CurrenciesPaginatedTable";
import usePagination from "../../../hooks/pagination/usePagination";

export default function CurrenciesHome() {
    const currencies = useCurrenciesTable();
    const numOfPages = currencies !== undefined ? Math.ceil(currencies.length / 10) : 0;

    const [state, dispatch] = usePagination(numOfPages);

    return (
        <section>
            <CurrenciesPaginatedTable
                currencies={currencies}
                state={state}/>
            <PaginationPagesBar
                dispatch={dispatch}
                numOfPages={numOfPages}/>
            <BackButton/>
        </section>
    )
}
