import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import CurrenciesHome from "./view/CurrenciesHome/CurrenciesHome";
import CurrenciesCalculator from "./view/CurrenciesCalculator/CurrenciesCalculator";
import NotFound from "../404/NotFound";

export default function Currencies() {
    let {path, url} = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={CurrenciesHome}>
                <CurrenciesHome url={url}/>
            </Route>
            <Route exact path={`${path}/calculator`} component={CurrenciesCalculator}>
                <CurrenciesCalculator url={url}/>
            </Route>
            <Route path={`${path}/*`} component={NotFound}/>
        </Switch>
    )
}
