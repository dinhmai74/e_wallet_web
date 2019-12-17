import React from "react";
import { AppCard, AppCardContent } from "../src/components";
import { useTheme } from '@material-ui/core'

export default {
  title: "Card"
};

export const Default = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        padding: theme.spacing(10)
      }}
    >
      <AppCard>
        <AppCardContent>
          <p className="text__h1">hello</p>
        </AppCardContent>
      </AppCard>
    </div>
  );
};
