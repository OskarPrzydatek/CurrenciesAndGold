import React from "react";
import "./Currencies.scss";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import CurrenciesHome from "./view/CurrenciesHome/CurrenciesHome";
import CurrenciesCalculator from "./view/CurrenciesCalculator/CurrenciesCalculator";
import NotFound from "../404/NotFound";

export default function Currencies() {
    let {path, url} = useRouteMatch();

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
            <Switch>
                <Route exact path={path} component={CurrenciesHome}/>
                <Route exact path={`${path}/calculator`} component={CurrenciesCalculator}/>
                <Route path={`${path}/*`} component={NotFound} />
                <Route path={`${path}/calculator/*`} component={NotFound} />
            </Switch>
        </section>
    )
}
