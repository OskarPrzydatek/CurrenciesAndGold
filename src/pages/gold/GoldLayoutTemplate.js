import React from "react";
import "./GoldLayoutStyle.scss";
import { Link } from "react-router-dom";

export default function GoldLayoutTemplate({ url, children }) {
    return (
        <section  className="gold-page">
            <nav className="gold-partial">
                <ul className="gold-partial__menu">
                    <li  className="gold-partial__menu__item gold-partial__menu__item-hover">
                        <Link to={url}>Złoto</Link>
                    </li>
                    <li  className="gold-partial__menu__item gold-partial__menu__item-hover">
                        <Link to={`${url}/history`}>Historia Cen</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </section>
    );
}
