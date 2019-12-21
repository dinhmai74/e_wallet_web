import React from "react";
import { Moment } from "moment";
import { DateFormatWithoutDate } from "utils/strings";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export type DirectionType = "back" | "forward";

interface Props {
  date: Moment;
  onClick: (direction: DirectionType) => void;
  className?: string;
  minDate: Moment;
  maxDate?: Moment;
}
export const AppDatePickerMonthSelector: React.FC<Props> = props => {
  const { date, onClick, className } = props;

  return (
    <div className={`flex flex-row justify-between min-w-68 ${className}`}>
      <div
        className="bg__bg-grey p-2 rounded-full cursor-pointer"
        onClick={() => onClick("back")}
      >
        <ArrowBackIos className="color__blue-grey icon--tiny mx-auto relative left-1/5" />
      </div>

      <p className="color__steel my-auto py-auto font-bold">
        {date.format(DateFormatWithoutDate)}
      </p>

      <div
        className="bg__bg-grey  p-2 rounded-full items-center justify-center cursor-pointer"
        onClick={() => onClick("forward")}
      >
        <ArrowForwardIos className="color__blue-grey icon--tiny" />
      </div>
    </div>
  );
};

AppDatePickerMonthSelector.defaultProps = {
  onClick: () => {}
};
