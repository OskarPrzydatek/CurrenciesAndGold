import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GoldHome from "./view/GoldHome/GoldHome";
import GoldHistory from "./view/GoldHistory/GoldHistory";
import NotFound from "../404/NotFound";

export default function Gold() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={GoldHome}>
                <GoldHome url={url} />
            </Route>
            <Route exact path={`${path}/history`} component={GoldHistory}>
                <GoldHistory url={url} />
            </Route>
            <Route path={`${path}/*`} component={NotFound} />
        </Switch>
    )
}
