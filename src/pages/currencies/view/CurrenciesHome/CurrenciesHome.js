import React from "react";
import "./CurrenciesHome.scss";
import BackButton from "../../../../components/BackButton/BackButton";
import useCurrenciesTablesFetch from "../../../../hooks/currencies/useCurrenciesTablesFetch";
import PaginationPagesBar from "./components/PaginationPagesBar/PaginationPagesBar";
import CurrenciesPaginatedList from "./components/CurrenciesPaginatedList/CurrenciesPaginatedList";
import usePagination from "../../../../hooks/pagination/usePagination";
import CurrenciesLayoutTemplate from "../../CurrenciesLayoutTemplate";

export default function CurrenciesHome({ url }) {
    const currencies = useCurrenciesTablesFetch();
    const elementsOnPages = 10;
    const numOfPages = currencies !== undefined ? Math.ceil(currencies.length / elementsOnPages) : 0;

    const [pagesState, dispatch] = usePagination(numOfPages);

    return (
        <CurrenciesLayoutTemplate url={url}>
            <article className="currencies-home">
                <header className="currencies-home__header">
                    <h1>Lista Walut</h1>
                    <p>Lista walut z przeliczeniem na złotówki dostępna w naszej aplikacji</p>
                </header>
                <CurrenciesPaginatedList
                    currencies={currencies}
                    pagesState={pagesState}/>
                <PaginationPagesBar
                    dispatch={dispatch}
                    numOfPages={numOfPages}
                    actualPage={pagesState.page}/>
                <BackButton/>
            </article>
        </CurrenciesLayoutTemplate>
    )
}
