import React from "react";
import "./CurrenciesLayoutStyle.scss";
import { Link } from "react-router-dom";

export default function CurrenciesLayoutTemplate({ url, children }) {
    return (
        <section className="currencies-page">
            <nav className="currencies-partial">
                <ul className="currencies-partial__menu">
                    <li className="currencies-partial__menu__item currencies-partial__menu__item-hover">
                        <Link to={url}>Waluty</Link>
                    </li>
                    <li className="currencies-partial__menu__item partial__menu__item-hover">
                        <Link to={`${url}/calculator`}>Kalkulator</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </section>
    );
}
