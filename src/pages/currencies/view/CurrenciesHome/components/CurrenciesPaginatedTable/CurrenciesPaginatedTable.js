import React from "react";

export default function CurrenciesPaginatedTable({currencies, state }) {
    return (
        <ul>
            {currencies !== undefined && currencies
                .slice(state.from, state.to)
                .map(currency => (
                    <li key={currency.code}>
                        <span>{currency.currency}&nbsp;</span>
                        <span>{currency.code}&nbsp;</span>
                        <span>{currency.mid}PLN</span>
                    </li>
                ))}
        </ul>
    );
}
