import React, { useEffect, useState } from "react";
// import TextAnim, { ITextyProps } from "rc-texty";

import { HotMovieData } from "mock-data/home/movies";
import { Pagination } from "screens/MovieTicket/MovieTicketHots/components/Pagination";
import { AnimText } from "screens/MovieTicket/MovieTicketHots/components/AnimText";
import { useBoolean } from "react-use";
import { useHotMovie } from "screens/MovieTicket/MovieTicketHots/useHotMovie";

interface Props {
  idx: number;
  title: string;
  nextTitle: string;
  className?: string;
}
export const InfoMovieShowing: React.FC<Props> = ({
  idx,
  title,
  nextTitle,
  className
}) => {
  return (
    <div
      className={`min-w-full min-h-full items-center flex flex-row ${className}`}
    >
      <Pagination activeIdx={idx + 1} total={HotMovieData.length} />
      <div className="ml-16">
        <AnimText className={`text__h1 color__blue-grey `}>
          The next movie:
        </AnimText>
        <br />
        <AnimText className={`text__b1 color__steel `}>{nextTitle}</AnimText>
      </div>
    </div>
  );
};
