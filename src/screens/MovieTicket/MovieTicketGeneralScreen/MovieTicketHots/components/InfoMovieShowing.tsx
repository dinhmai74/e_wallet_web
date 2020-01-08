import React from "react";

import { HotMovieData } from "mock-data/home/movies";
import { AnimText } from "screens/MovieTicket/MovieTicketGeneralScreen/MovieTicketHots/components/AnimText";
import { Pagination } from "screens/MovieTicket/MovieTicketGeneralScreen/MovieTicketHots/components/Footer/Pagination";

interface Props {
  idx: number;
  nextTitle: string;
  className?: string;
}
export const InfoMovieShowing: React.FC<Props> = ({
  idx,
  nextTitle,
  className
}) => {
  return (
    <div
      className={`min-w-full min-h-full items-center flex flex-row ${className}`}
    >
      <Pagination activeIdx={idx + 1} total={HotMovieData.length} />
      <div className="ml-16">
        <AnimText className="text__h1 color__blue-grey ">
          The next movie:
        </AnimText>

        <br />
        <AnimText className={`text__b1 color__steel `}>{nextTitle}</AnimText>
      </div>
    </div>
  );
};
