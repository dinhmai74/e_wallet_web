import { createMuiTheme } from "@material-ui/core/styles";
// import styles from "./color/_colors.scss";
import styles from "theme/color/_colors.scss";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: styles.primary
    },
    secondary: {
      main: styles.blue
    }
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        "&:hover": {
          backgroundColor: styles.primary,
          color: "#fff"
        }
      },
      text: {
        fontSize: 40,
        color: "blue",
        fontWeight: 400,
        fontFamily: "Rubik"
      }
    }
  }
});
