import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import GoldHome from "./view/GoldHome/GoldHome";
import GoldHistory from "./view/GoldHistory/GoldHistory";

export default function Gold() {
    let {path, url} = useRouteMatch();

    return (
        <section>
            <aside>
                <nav>
                    <ul>
                        <li><Link to={url}>Złoto</Link></li>
                        <li><Link to={`${url}/history`}>Historia Cen</Link></li>
                    </ul>
                </nav>
            </aside>
            <Switch>
                <Route exact path={path} component={GoldHome} />
                <Route path={`${path}/history`} component={GoldHistory} />
            </Switch>
        </section>
    )
}
