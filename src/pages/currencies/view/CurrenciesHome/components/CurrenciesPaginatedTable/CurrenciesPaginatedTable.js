import React from "react";

export default function CurrenciesPaginatedTable({currencies, pagesState }) {
    return (
        <ul>
            {currencies !== undefined && currencies
                .slice(pagesState.from, pagesState.to)
                .map(currency => (
                    <li key={currency.code}>
                        <span>{currency.currency}&nbsp;</span>
                        <span>{currency.code}&nbsp;</span>
                        <span>{currency.mid.toFixed(2)}PLN</span>
                    </li>
                ))}
        </ul>
    );
}
