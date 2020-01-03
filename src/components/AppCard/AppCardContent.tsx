import { CardContent, CardContentProps } from "@material-ui/core";
import React from "react";

export interface AppCardContentProps extends CardContentProps {}

export const AppCardContent: React.FC = props => {
  const { children, ...rest } = props;
  return <CardContent {...rest}>{children}</CardContent>;
};
