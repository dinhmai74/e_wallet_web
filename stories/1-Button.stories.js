import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { AppButton } from "../src/components";

export default {
  decorators: [withKnobs],
  title: "Button"
};

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const colors = {
  primary: "primary",
  secondary: "secondary"
};

export const materialUI = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant={text("variant", "contained")}
        disabled={boolean("Disabled", false)}
        color={text("color", "primary")}
        fullWidth={boolean("full width", false)}
      >
        {text("Label", "Hello Storybook")}
      </Button>
    </div>
  );
};

export const appButton = () => {
  return (
    <AppButton
      variant={text("variant", "contained")}
      disabled={boolean("Disabled", false)}
      color={text("color", "primary")}
      fullWidth={boolean("full width", false)}
    >
      {text("Label", "Hello Storybook")}
    </AppButton>
  );
};

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
