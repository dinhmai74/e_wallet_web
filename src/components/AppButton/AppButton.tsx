import { Button, ButtonProps, CircularProgress } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/styles";
import React from "react";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      borderRadius: 4
    },
    contained: {
      "&:hover": {
        opacity: 0.6,
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText
      },
      "&:disabled": {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        opacity: 0.2
      }
    },
    outlined: {},

    label: {
      textTransform: "capitalize",
      fontSize: 14,
      fontFamily: "Rubik",
      fontWeight: 400
    }
  });

export interface AppButtonProps extends ButtonProps {
  tx?: string;
  children?: any;
  loading?: boolean;
}

export const AppButton = withStyles(styles)((props: AppButtonProps) => {
  const { color, className, tx, children, loading, ...rest } = props;
  const content = children || (
    <div className={`${loading && "opacity-0 "} flex flex-row`}>{tx}</div>
  );
  return (
    <Button
      color={color}
      className={`text__btn ${className} `}
      disableElevation
      {...rest}
    >
      {loading && (
        <CircularProgress
          size={14}
          className="text-white absolute left-1/2 right-1/2"
        />
      )}
      {content}
    </Button>
  );
});

AppButton.defaultProps = {
  variant: "contained",
  color: "primary",
  loading: false
};
