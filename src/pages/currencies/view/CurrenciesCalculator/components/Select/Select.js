import React from "react";

export default function Select({ currencies, dispatch, content, type }) {
    return (
        <select defaultValue='content' onChange={event => dispatch({type: type, payload: JSON.parse(event.target.value)})}>
            <option value="content" disabled hidden>{content}</option>
            {currencies !== undefined && currencies.map(currency => (
                <option
                    key={currency.code}
                    value={JSON.stringify(currency)}>
                    {currency.currency}
                    {currency.code}
                </option>
            ))}
        </select>
    );
}
