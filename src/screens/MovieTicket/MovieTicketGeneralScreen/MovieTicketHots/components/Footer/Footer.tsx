import React from "react";
import { Wallpaper } from "components/Wallpaper";
import { AppButton } from "components";
import { HotMovieData, MovieModel } from "mock-data/home/movies";
import { InfoMovieShowing } from "screens/MovieTicket/MovieTicketGeneralScreen/MovieTicketHots/components/InfoMovieShowing";
import { IconArrowHalf } from "theme/Icons";
import { metrics } from "theme/metrics";
import { observer } from "mobx-react";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";

interface Props {
  movie: MovieModel;
  isChanging: boolean;
}

export const Footer: React.FC<Props> = observer(({ movie, isChanging }) => {
  const { id } = movie;
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

  const history = useHistory();

  return (
    <div className={`${absolutePos} md:h-68 px-${sidePadding}`}>
      <AppButton
        className={`md:relative z-10 py-2 my-8 md:my-0 ${anim}`}
        onClick={() => {
          history.push(Paths.movieTicketDetail + "/" + id);
        }}
      >
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
});
