import React from "react";
import "./App.scss";
import "./styles/index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrimaryRouters } from "router/PrimaryRouters";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "theme/materialUITheme";
import { Sidebar, Header } from "components";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
import { PageNotFound } from "components/PageNotFound";
import { ImgNotFound404 } from "theme";
import { Footer } from "components/Footer";
AOS.init();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Switch>
          {PrimaryRouters.map(val => {
            return (
              <Route
                path={val.path}
                component={val.Component}
                key={val.path}
                exact
              />
            );
          })}
          <Route
            path="/"
            render={() => (
              <PageNotFound Img={ImgNotFound404} message="Page not found" />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
