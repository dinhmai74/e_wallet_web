import React from "react";
import { Wallpaper } from "components/Wallpaper";
import { AppButton } from "components";
import { images } from "theme";
import { HotMovieData } from "mock-data/home/movies";
import { InfoMovieShowing } from "screens/MovieTicket/MovieTicketHots/components/InfoMovieShowing";
import { useHotMovie } from "screens/MovieTicket/MovieTicketHots/useHotMovie";

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { movie, isChanging } = useHotMovie();
  const absolutePos = "absolute inset-x-0 bottom-0";

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
    <div className={`${absolutePos} h-68 px-${sidePadding}`}>
      <AppButton tx="test" className={`relative z-10 py-2 ${anim}`}>
        <p className="pl-12 pr-4">View more</p>
        <img
          src={images.icon.arrowHalf}
          className="w-8 self-center mr-8"
          alt={"icon"}
        />
      </AppButton>
      <Wallpaper className={`bg__bg-17 h-64 py-8 px-${sidePadding}`}>
        <InfoMovieShowing idx={idx} nextTitle={nextTitle} className={anim} />
      </Wallpaper>
    </div>
  );
};
