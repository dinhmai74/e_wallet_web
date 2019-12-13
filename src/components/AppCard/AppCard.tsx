import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card, { CardProps } from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import colors from "theme/color/_colors.scss";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    boxShadow: `0 0 15px 0 rgba(0, 0, 0, 0.1)`,
    borderRadius: 10,
    backgroundColor: colors.white
  }
});

export interface AppCardProps extends CardProps {}

export const AppCard: React.FC<AppCardProps> = props => {
  const classes = useStyles();
  const { children, ...rest } = props;

  return (
    <Card className={classes.card} {...rest}>
      {children}
    </Card>
  );
};
