import React from "react";
import "./Gold.scss";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import GoldHome from "./view/GoldHome/GoldHome";
import GoldHistory from "./view/GoldHistory/GoldHistory";

export default function Gold() {
    let {path, url} = useRouteMatch();

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
            <Switch>
                <Route exact path={path} component={GoldHome} />
                <Route path={`${path}/history`} component={GoldHistory} />
            </Switch>
        </section>
    )
}
