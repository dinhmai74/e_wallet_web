import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { theme } from "../src/theme/materialUITheme";

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
  </StylesProvider>
);

export default StylesDecorator;
