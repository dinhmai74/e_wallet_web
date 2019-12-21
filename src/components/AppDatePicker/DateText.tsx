import React from "react";
import moment, { Moment } from "moment";

interface Props {
  isActive?: boolean;
  onClick: (date: Moment) => void;
  date: Moment;
}

export const DateText: React.FC<Props> = props => {
  const { isActive, date, onClick } = props;
  const color = isActive ? "primary" : "steel";
  const isToday = date.isSame(moment(), "day");

  return (
    <div className="items-center m-2 cursor-pointer" onClick={() => onClick(date)}>
      <p className={`text-center color__${color}`}>
        {isToday ? "Today" : date.format("ddd")}
      </p>
      <p className={`text__d2 color__${color} text-center`}>
        {date.format("DD")}
      </p>
    </div>
  );
};
