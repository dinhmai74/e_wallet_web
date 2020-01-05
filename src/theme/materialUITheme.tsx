import { createMuiTheme } from "@material-ui/core/styles";
// import styles from "./color/_colors.scss";
import styles from "theme/color/_colors.scss";

export const theme = createMuiTheme({
 overrides: {
    MuiButton: {
      outlinedPrimary: {
        "&:hover": {
          backgroundColor: styles.primary,
          color: "#fff"
        }
      },
      text: {
        color: "blue",
        fontSize: 40,
        fontWeight: 400,
        fontFamily: "Rubik"
      }
    }
  },
  palette: {
    primary: {
      main: styles.primary
    },
    secondary: {
      main: styles.blue
    }
  },
 
});
