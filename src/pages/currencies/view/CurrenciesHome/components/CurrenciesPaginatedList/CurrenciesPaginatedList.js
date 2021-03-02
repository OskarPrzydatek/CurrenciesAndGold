import React from "react";
import "./CurrenciesPaginationList.scss";

export default function CurrenciesPaginatedList({currencies, pagesState}) {
    return (
        <ul className="currency-list">
            {currencies !== undefined && currencies
                .slice(pagesState.from, pagesState.to)
                .map(currency => (
                    <li key={currency.code}
                        className="currency-list__item">
                        <span>{currency.currency}&nbsp;</span>
                        <span>{currency.code}&nbsp;</span>
                        <span>{currency.mid.toFixed(2)}PLN</span>
                    </li>
                ))}
        </ul>
    );
}
