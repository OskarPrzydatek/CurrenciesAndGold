import React from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import useCurrenciesTablesFetch from "../../../../hooks/currencies/useCurrenciesTablesFetch";
import PaginationPagesBar from "./components/PaginationPagesBar/PaginationPagesBar";
import CurrenciesPaginatedTable from "./components/CurrenciesPaginatedTable/CurrenciesPaginatedTable";
import usePagination from "../../../../hooks/pagination/usePagination";

export default function CurrenciesHome() {
    const currencies = useCurrenciesTablesFetch();
    const elementsOnPages = 10;
    const numOfPages = currencies !== undefined ? Math.ceil(currencies.length / elementsOnPages) : 0;

    const [pagesState, dispatch] = usePagination(numOfPages);

    return (
        <section>
            <CurrenciesPaginatedTable
                currencies={currencies}
                pagesState={pagesState}/>
            <PaginationPagesBar
                dispatch={dispatch}
                numOfPages={numOfPages}
                actualPage={pagesState.page}/>
            <BackButton/>
        </section>
    )
}
