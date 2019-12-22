import {
  AppDatePickerMonthSelector,
  DirectionType
} from "components/AppDatePicker/AppDatePickerMonthSelector";
import moment, { Moment } from "moment";
import React, { useState } from "react";
import { immer, persist } from "utils/zustand";
import create from "zustand";
import { DateText } from "./DateText";

interface Props {
  className?: string;
  minDate: Moment;
  maxDate?: Moment;
  onChange: (date: Moment) => void;
}

interface AppDatePickerState {
  date: Moment;
  dateMainView: Moment;
  getDatesViewBaseOnMain: () => Moment[];
  setDate: (date: Moment) => void;
  setNextWeek: () => void;
  setPreWeek: () => void;
  setMainDateView: (date: Moment) => void;
}

const LS_KEY = "AppPickerSate";
export const [useAppDatePicker] = create<AppDatePickerState>(
  persist(LS_KEY)(
    immer((set, get) => ({
      date: moment(),
      dateMainView: moment(),
      getDatesViewBaseOnMain: () => {
        const tempDates: Moment[] = [];
        for (let i = 0; i < 7; i++) {
          const temp = moment(get().dateMainView);
          tempDates.push(temp.add(i, "days"));
        }
        return tempDates;
      },
      setDate: (date: Moment) => {
        set((state: AppDatePickerState) => {
          state.date = date;
        });
      },
      setNextWeek: () => {
        const date = get().dateMainView.add(1, "weeks");
        get().setMainDateView(date);
      },
      setPreWeek: () => {
        const date = get().dateMainView.subtract(1, "weeks");
        get().setMainDateView(date);
      },
      setMainDateView: (date: Moment) => {
        set(state => {
          state.dateMainView = date;
        });
      }
    }))
  )
);

export const AppDatePicker: React.FC<Props> = props => {
  const { className } = props;
  const [force, forceUpdate] = useState(false);

  const {
    date,
    dateMainView,
    getDatesViewBaseOnMain,
    setDate,
    setNextWeek,
    setPreWeek
  } = useAppDatePicker();

  const onWeekClick = (direction: DirectionType) => {
    direction === "forward" ? setNextWeek() : setPreWeek();
    forceUpdate(!force);
  };

  const dates = getDatesViewBaseOnMain();

  return (
    <div className={className}>
      <AppDatePickerMonthSelector
        date={dateMainView}
        onClick={onWeekClick}
        className="mb-2"
        minDate={moment()}
      />
      <div className="flex flex-row mx-auto flex-1 items-center justify-center">
        {dates.map((val, idx) => {
          return (
            <DateText
              date={val}
              key={idx}
              isActive={date.isSame(val, "day")}
              onClick={d => {
                setDate(moment(d));
                props.onChange(d);
              }}
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
