import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import CurrenciesHome from "./view/CurrenciesHome/CurrenciesHome";
import CurrenciesCalculator from "./view/CurrenciesCalculator/CurrenciesCalculator";
import CurrenciesHistory from "./view/CurrenciesHistory/CurrenciesHistory";

export default function Currencies() {
    let {path, url} = useRouteMatch();

    return (
        <section>
            <aside>
                <nav>
                    <ul>
                        <li><Link to={url}>Waluty</Link></li>
                        <li><Link to={`${url}/calculator`}>Kalkulator Wartości</Link></li>
                        <li><Link to={`${url}/history`}>Historia Wartości</Link></li>
                    </ul>
                </nav>
            </aside>
            <Switch>
                <Route exact path={path} component={CurrenciesHome}/>
                <Route path={`${path}/calculator`} component={CurrenciesCalculator} />
                <Route path={`${path}/history`} component={CurrenciesHistory} />
            </Switch>
        </section>
    )
}
