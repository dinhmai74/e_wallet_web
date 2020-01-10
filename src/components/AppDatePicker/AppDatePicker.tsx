import {
  AppDatePickerMonthSelector,
  DirectionType
} from "components/AppDatePicker/AppDatePickerMonthSelector";
import moment, { Moment } from "moment";
import React, { useState } from "react";
import { immer, persist } from "utils/zustand";
import create from "zustand";
import { DateText } from "./DateText";
import { animated, useSpring } from "react-spring";
import { useBoolean } from "react-use";

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
  const { className, onChange } = props;
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
    setOpen(false);
    setTimeout(() => {
      forceUpdate(!force);
      setOpen(true);
    }, 300);
  };

  const dates = getDatesViewBaseOnMain();

  const [isOpen, setOpen] = useBoolean(true);

  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: isOpen ? 1 : 0
    }
  });

  return (
    <div className={className}>
      <AppDatePickerMonthSelector
        date={dateMainView}
        onClick={onWeekClick}
        className="mb-2"
        minDate={moment()}
      />
      <animated.div
        className="flex flex-row mx-auto items-center justify-center"
        style={{ opacity }}
      >
        {dates.map((val, idx) => {
          return (
            <DateText
              date={val}
              key={idx}
              isActive={date.isSame(val, "day")}
              onClick={d => {
                setDate(moment(d));
                onChange(d);
              }}
            />
          );
        })}
      </animated.div>
    </div>
  );
};

AppDatePicker.defaultProps = {
  minDate: moment(),
  onChange: () => {}
};
