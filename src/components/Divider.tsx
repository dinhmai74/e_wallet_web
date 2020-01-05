import { Divider as MDivider, DividerProps } from "@material-ui/core";
import React from "react";
import colors from "theme/color/_colors.scss";

interface Props extends DividerProps {}

export const Divider: React.FC<Props> = props => {
  return (
    <MDivider
      {...props}
      style={{
        backgroundColor: colors.blueGrey
      }}
    />
  );
};
