import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrimaryRouters } from "router/PrimaryRouters";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {PrimaryRouters.map(val => {
          return (
            <Route path={val.path} component={val.Component} key={val.path} />
          );
        })}
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
