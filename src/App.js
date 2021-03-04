import React from "react";
import "./style/style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Currencies from "./pages/currencies/Currencies";
import Gold from "./pages/gold/Gold";
import NotFound from "./pages/404/NotFound";

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/currencies' component={Currencies} />
          <Route exact path='/gold' component={Gold} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
}
