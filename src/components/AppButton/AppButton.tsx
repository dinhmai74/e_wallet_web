import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import styled from "styled-components";
import colors from "theme/color/_colors.scss";
import { Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const StyledButton = styled(Button)`
  &:hover {
    background: ${colors.primary};
  }
`;

const styles: (theme: Theme) => any = theme => {
  return {
    contained: {
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        opacity: 0.6
      },
      "&:disabled": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        opacity: 0.2
      }
    },
    outlined: {}
  };
};

export interface AppButtonProps extends ButtonProps {
  tx?: string;
  children?: any;
}

export const AppButton = withStyles(styles)((props: AppButtonProps) => {
  const { className, variant, tx, children, ...rest } = props;
  const classes = props.classes || {};
  const content = children || tx;
  return (
    <Button
      {...props}
      className={`${className} 
    // @ts-ignore
    ${classes[variant]}`}
    >
      {content}
    </Button>
  );
});

AppButton.defaultProps = {
  variant: "contained"
};
