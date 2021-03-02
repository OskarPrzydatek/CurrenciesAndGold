import React from "react";
import "./Currencies.scss";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import CurrenciesHome from "./view/CurrenciesHome/CurrenciesHome";
import CurrenciesCalculator from "./view/CurrenciesCalculator/CurrenciesCalculator";

export default function Currencies() {
    let {path, url} = useRouteMatch();

    return (
        <section className="currencies">
            <nav className="partial">
                <ul className="partial__menu">
                    <li className="partial__menu__item partial__menu__item-hover">
                        <Link to={url}>Waluty</Link>
                    </li>
                    <li className="partial__menu__item partial__menu__item-hover">
                        <Link to={`${url}/calculator`}>Kalkulator</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path={path} component={CurrenciesHome}/>
                <Route path={`${path}/calculator`} component={CurrenciesCalculator}/>
            </Switch>
        </section>
    )
}
