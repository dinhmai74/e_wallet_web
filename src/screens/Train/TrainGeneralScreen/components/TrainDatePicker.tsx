import { Popover } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { Calendar, Day } from "react-modern-calendar-datepicker";
import { TrainTextField } from "screens/Train/TrainGeneralScreen/components/TrainTextField";
import colors from "theme/color/_colors.scss";
import { DateFormat } from "utils/strings";

interface Props {
  label?: string;
  value?: Day;
  onChange: (value: Day) => void;
  className?: string;
}

export const TrainDatePicker: React.FC<Props> = props => {
  const { className, label, value, onChange } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (v: Day) => {
    onChange(v);
    handleClose();
  };

  let momentDate = moment().format(DateFormat);

  if (value) {
    momentDate = moment(`${value?.year}-${value?.month}-${value?.day}`).format(
      DateFormat
    );
  }

  console.log(`%c id,open`, `color: blue; font-weight: 600`, id, open);

  return (
    <div className={`w-full ${className}`}>
      <div
        aria-describedby={id}
        className="w-full cursor-pointer"
        onClick={handleClick}
      >
        <TrainTextField value={momentDate} label={label} />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Calendar
          value={value}
          onChange={handleChange}
          colorPrimary={colors.primary}
          colorPrimaryLight={"#ee5f7b1d"}
          shouldHighlightWeekends
        />
      </Popover>
    </div>
  );
};
