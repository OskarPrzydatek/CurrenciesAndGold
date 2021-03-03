import React from "react";
import "./Select.scss";
import PolishZloty from "../PolishZloty/PolishZloty";

export default function Select({ currencies, dispatch, content, type }) {
    return (
        <select defaultValue="content"
                className="currency-select"
                onChange={event => dispatch({type: type, payload: JSON.parse(event.target.value)})}>
            <option value="content" disabled hidden>{content}</option>
            <PolishZloty />
            {currencies !== undefined && currencies.map(currency => (
                <option
                    key={currency.code}
                    value={JSON.stringify(currency)}>
                    {currency.currency}
                </option>
            ))}
        </select>
    );
}
