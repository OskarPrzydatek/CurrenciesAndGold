import React from "react";
import "./style/style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Currencies from "./pages/currencies/Currencies";
import Gold from "./pages/gold/Gold";

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/currencies' component={Currencies} />
          <Route path='/gold' component={Gold} />
        </Switch>
      </BrowserRouter>
  );
}
