import React from "react";
import { formatDigitNumber } from "utils/number";
import { AnimText } from "screens/MovieTicket/MovieTicketGeneralScreen/MovieTicketHots/components/AnimText";

interface Props {
  activeIdx: number;
  total: number;
}
export const Pagination: React.FC<Props> = ({ activeIdx, total }) => {
  return (
    <>
      <div className="flex flex-row">
        <AnimText className="text__h1 color__grey mr-4">
          {formatDigitNumber(activeIdx)}
        </AnimText>
        <div>
          <br />
          <AnimText className="text__h4 color__steel mr-4">/</AnimText>
          <AnimText className="text__h4 color__steel pl-4">
            {formatDigitNumber(total)}
          </AnimText>
        </div>
      </div>
    </>
  );
};
