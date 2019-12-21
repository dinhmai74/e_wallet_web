import React, { useEffect, useState } from "react";
import { DateText } from "./DateText";
import moment, { Moment } from "moment";
import {
  AppDatePickerMonthSelector,
  DirectionType
} from "components/AppDatePicker/AppDatePickerMonthSelector";
import { DateFormat } from "utils/strings";

interface Props {
  className?: string;
  minDate: Moment;
  maxDate?: Moment;
  onChange: (date: Moment) => void;
}

const calcNewDateView = (
  direction: DirectionType,
  currentDate: Moment
): Moment => {
  const newDate = moment(currentDate);
  direction === "forward"
    ? newDate.add(1, "weeks")
    : newDate.subtract(1, "weeks");

  return newDate;
};

export const AppDatePicker: React.FC<Props> = props => {
  const { onChange, className, minDate, maxDate } = props;

  const [dateView, setDateView] = useState<Moment>(moment());
  const [dateSelected, setDateSelected] = useState<Moment>(moment());
  const [dates, setDates] = useState<Moment[]>([]);

  const onWeekClick = (direction: DirectionType) => {
    const newDate = calcNewDateView(direction, dateView);
    setDateView(moment(newDate));
  };

  function updateDates() {
    return () => {
      const tempDates: Moment[] = [];
      for (let i = 0; i < 7; i++) {
        const temp = moment(dateView);
        tempDates.push(temp.add(i, "days"));
      }

      setDates(tempDates);
    };
  }

  useEffect(updateDates(), [dateView]);

  useEffect(() => {
    onChange(moment(dateSelected));
  }, [dateSelected, onChange]);

  return (
    <div className={className}>
      <AppDatePickerMonthSelector
        date={dateView}
        onClick={onWeekClick}
        className="mb-2"
        minDate={minDate}
        maxDate={maxDate}
      />
      <div className="flex flex-row">
        {dates.map((val, idx) => {
          return (
            <DateText
              date={val}
              key={idx}
              isActive={dateSelected.isSame(val, "day")}
              onClick={d => setDateSelected(moment(d))}
            />
          );
        })}
      </div>
    </div>
  );
};

AppDatePicker.defaultProps = {
  minDate: moment(),
  onChange: () => {}
};
