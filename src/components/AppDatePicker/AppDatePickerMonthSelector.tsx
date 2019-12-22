import React, { useEffect } from "react";
import moment, { Moment } from "moment";
import { DateFormatWithoutDate } from "utils/strings";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useBoolean } from "react-use";

export type DirectionType = "back" | "forward";

interface Props {
  date: Moment;
  onClick: (direction: DirectionType) => void;
  className?: string;
  minDate: Moment;
  maxDate?: Moment;
}

export const AppDatePickerMonthSelector: React.FC<Props> = props => {
  const { minDate, maxDate, date, onClick, className } = props;
  const [disableBack, setDisableBack] = useBoolean(false);
  const [disableForward, setDisableForward] = useBoolean(false);

  useEffect(() => {
    const tempDate = moment(date);
    if (minDate.isAfter(tempDate.subtract(1, "weeks").add(1, "days"))) {
      setDisableBack(true);
    } else {
      setDisableBack(false);
    }
  }, [date, minDate, setDisableBack]);

  useEffect(() => {
    const tempDate = moment(date);
    if (
      maxDate &&
      maxDate.isBefore(tempDate.add(1, "weeks").subtract(1, "days"))
    ) {
      setDisableForward(true);
    } else {
      setDisableForward(false);
    }
  }, [date, maxDate, setDisableForward]);

  const disableClass = "opacity-0 cursor-default";

  return (
    <div className={`flex flex-row justify-between ${className}`}>
      <div
        className={`bg__bg-grey p-2 rounded-full ${
          disableBack ? disableClass : "cursor-pointer "
        }`}
        onClick={() => !disableBack && onClick("back")}
      >
        <ArrowBackIos className="color__blue-grey icon--tiny mx-auto relative left-1/5" />
      </div>

      <p className="color__steel my-auto py-auto font-bold">
        {date.format(DateFormatWithoutDate)}
      </p>

      <div
        className={`bg__bg-grey p-2 rounded-full ${
          disableForward ? disableClass : "cursor-pointer "
        }`}
        onClick={() => !disableForward && onClick("forward")}
      >
        <ArrowForwardIos className="color__blue-grey icon--tiny" />
      </div>
    </div>
  );
};

AppDatePickerMonthSelector.defaultProps = {
  onClick: () => {},
  maxDate: moment().add(10, "years")
};
