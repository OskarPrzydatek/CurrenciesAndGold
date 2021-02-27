import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import CurrenciesHome from "./view/CurrenciesHome/CurrenciesHome";
import CurrenciesCalculator from "./view/CurrenciesCalculator/CurrenciesCalculator";

export default function Currencies() {
    let {path, url} = useRouteMatch();

    return (
        <section>
            <aside>
                <nav>
                    <ul>
                        <li><Link to={url}>Waluty</Link></li>
                        <li><Link to={`${url}/calculator`}>Kalkulator Walut</Link></li>
                    </ul>
                </nav>
            </aside>
            <Switch>
                <Route exact path={path} component={CurrenciesHome}/>
                <Route path={`${path}/calculator`} component={CurrenciesCalculator} />
            </Switch>
        </section>
    )
}
