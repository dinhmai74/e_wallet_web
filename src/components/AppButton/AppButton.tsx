import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles: (theme: Theme) => any = theme => {
  return {
    root: {
      borderRadius: 6
    },
    contained: {
      "&:hover": {
        opacity: 0.6,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      "&:disabled": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        opacity: 0.2
      }
    },
    outlined: {},

    label: {
      textTransform: "capitalize",
      fontSize: 16,
      fontFamily: "Rubik",
      fontWeight: 400
    }
  };
};

export interface AppButtonProps extends ButtonProps {
  tx?: string;
  children?: any;
}

export const AppButton = withStyles(styles)((props: AppButtonProps) => {
  const { color, className, tx, children, ...rest } = props;
  const content = children || tx;
  return (
    <Button {...rest} color={color} className={`${className} `}>
      {content}
    </Button>
  );
});

AppButton.defaultProps = {
  variant: "contained",
  color: "primary"
};
