import { ThemeProvider } from "@material-ui/core";
import AOS from "aos";
import { Header, Sidebar } from "components";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { PrimaryRouters } from "router/PrimaryRouters";
import { theme } from "theme/materialUITheme";
import "./App.scss";
import "./styles/index.scss";

import "aos/dist/aos.css"; // You can also use <link> for styles
import { PageNotFound } from "components/PageNotFound";
import { ImgNotFound404 } from "theme";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

theme.shadows[24] = "0 0 15px 0 rgba(0, 0, 0, 0.1)";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />

        <Sidebar />
        <Header />
        <Switch>
          {PrimaryRouters.map(val => {
            return (
              <Route
                onUpdate={() => window.scrollTo(0, 0)}
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
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
