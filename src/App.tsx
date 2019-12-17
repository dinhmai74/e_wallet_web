import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrimaryRouters } from "router/PrimaryRouters";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "theme/materialUITheme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
