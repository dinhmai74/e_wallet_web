import React from "react";
import Youtube from "react-youtube";
import cx from "classnames";

import { Screen } from "components";
import { MovieTicketDeatilScreenInfo } from "./components/MovieTicketDetailScreen.Info";
import { useParams } from "react-router";
import { MovieData, CastModel } from "mock-data/home/movies";
import { ImgNotFound } from "theme";
import { PageNotFound } from "components/PageNotFound";
import styles from "./MovieTicketDetailScreen.module.scss";
import { useWindowSize } from "react-use";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { CastAvatar } from "screens/MovieTicket/MovieTicketDetailScreen/components/CastAvatar";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

interface Props {}

export const MovieTicketDetailSreen: React.FC<Props> = () => {
  const { id } = useParams();
  const movie = MovieData.find(val => val.id === id);
  const { height, width } = useWindowSize();

  if (!movie) {
    return <PageNotFound Img={ImgNotFound} />;
  }

  const opts = {};

  const { trailSrc, casts } = movie;
  const onShowing = UpcomingListMovies(casts);

  return (
    <Screen className="pl-20 pt-40">
      <div className="flex flex-row">
        <MovieTicketDeatilScreenInfo movie={movie} className="md:w-1/2 pr-20" />
        <div className={cx(styles.youtube, "hidden md:block")}>
          <Youtube
            videoId={trailSrc}
            className="min-w-full min-h-full"
            opts={opts}
          />
        </div>
      </div>
      <div className="mr-20">
        <p className="text__h2 color__grey mb-8">Cast:</p>
        <ScrollMenu
          alignCenter={false}
          data={onShowing}
          arrowLeft={ArrowLeft()}
          arrowRight={ArrowRight()}
        />
      </div>
    </Screen>
  );
};

const UpcomingListMovies = (casts: CastModel[]) => {
  return casts.map(el => {
    const { name, src } = el;
    return <CastAvatar name={name} src={src} key={name} />;
  });
};

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;
