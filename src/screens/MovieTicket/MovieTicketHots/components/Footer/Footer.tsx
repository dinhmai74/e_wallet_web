import React from "react";
import { Wallpaper } from "components/Wallpaper";
import { AppButton } from "components";
import { HotMovieData, MovieModel } from "mock-data/home/movies";
import { InfoMovieShowing } from "screens/MovieTicket/MovieTicketHots/components/InfoMovieShowing";
import { IconArrowHalf } from "theme/Icons";
import { metrics } from "theme/metrics";

interface Props {
  movie: MovieModel;
  isChanging: boolean;
}

export const Footer: React.FC<Props> = ({ movie, isChanging }) => {
  const absolutePos = "md:absolute inset-x-0 bottom-0";

  const sidePadding = 24;

  const idx = HotMovieData.indexOf(movie);
  const nextIdx = idx + 1;
  let nextTitle = "";

  if (nextIdx !== HotMovieData.length) {
    nextTitle = HotMovieData[nextIdx].title;
  } else {
    nextTitle = HotMovieData[0].title;
  }

  const anim = isChanging ? "anim--fadeIn" : "";

  return (
    <div className={`${absolutePos} md:h-68 px-${sidePadding}`}>
      <AppButton className={`md:relative z-10 py-2 my-8 md:my-0 ${anim}`}>
        <p className="pl-12 pr-4">View more</p>
        <IconArrowHalf width={metrics.icon.sm} />
      </AppButton>
      <Wallpaper
        className={`bg__bg-17 h-64 py-8 px-${sidePadding} hidden md:block`}
      >
        <InfoMovieShowing idx={idx} nextTitle={nextTitle} className={anim} />
      </Wallpaper>
    </div>
  );
};
