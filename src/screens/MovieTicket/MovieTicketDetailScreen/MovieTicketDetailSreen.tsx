import React, { useContext } from "react";
import Youtube from "react-youtube";
import cx from "classnames";

import { Screen, AppButton } from "components";
import { MovieTicketDeatilScreenInfo } from "./components/MovieTicketDetailScreen.Info";
import { useParams, useHistory } from "react-router";
import { MovieData, AvatarModel } from "mock-data/home/movies";
import { ImgNotFound } from "theme";
import { PageNotFound } from "components/PageNotFound";
import styles from "./MovieTicketDetailScreen.module.scss";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { CastAvatar } from "screens/MovieTicket/MovieTicketDetailScreen/components/CastAvatar";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Paths } from "router/PrimaryRouters";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { observer } from "mobx-react";

interface Props {}

export const MovieTicketDetailSreen: React.FC<Props> = observer(() => {
  const { id } = useParams();
  const movie = MovieData.find(val => val.id === id);
  const history = useHistory();
  const movieContextStore = useContext(MovieTicketStoreContext);

  if (!movie) {
    return <PageNotFound Img={ImgNotFound} />;
  }

  const opts = {};

  const { trailSrc, casts } = movie;
  const listCasts = generateListCasts(casts);

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
          data={listCasts}
          arrowLeft={ArrowLeft()}
          arrowRight={ArrowRight()}
        />
      </div>

      <div className="items-center flex flex-1">
        <AppButton
          variant="outlined"
          className={cx("my-12 self-center mx-auto", styles.button)}
          onClick={() => {
            history.push(Paths.movieTicketChoseInfo);
            movieContextStore.id = id || "";
          }}
        >
          Buy ticket
        </AppButton>
      </div>
    </Screen>
  );
});

const generateListCasts = (casts: AvatarModel[]) => {
  return casts.map((el, idx) => {
    const { name, src } = el;
    return <CastAvatar name={name} src={src} key={idx} />;
  });
};

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;
