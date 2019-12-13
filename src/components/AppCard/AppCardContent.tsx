import React from "react";
import { CardContent, CardContentProps } from "@material-ui/core";

export interface AppCardContentProps extends CardContentProps {}

export const AppCardContent: React.FC = props => {
  const { children, ...rest } = props;
  return <CardContent {...rest}>{children}</CardContent>;
};
