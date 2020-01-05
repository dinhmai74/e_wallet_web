import { TextField } from "@material-ui/core";
import moment from "moment";
import React from "react";
import colors from "theme/color/_colors.scss";
import { DateFormat } from "utils/strings";

interface Props {
  [rest: string]: any;
}

export const TrainTextField: React.FC<Props> = ({ ...rest }) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      defaultValue={moment().format(DateFormat)}
      placeholder="DDDD MM YYYY"
      className="w-full cursor-pointer"
      size="small"
      InputLabelProps={{
        style: { color: colors.blueGrey, opacity: "0.6" } as any
      }}
      InputProps={{
        style: { fontSize: 14, color: colors.blueGrey } as any
      }}
      {...rest}
    />
  );
};
