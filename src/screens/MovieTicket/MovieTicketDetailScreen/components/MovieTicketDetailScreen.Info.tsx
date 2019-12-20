import React from "react";
import moment from "moment";
import TextTruncate from "react-text-truncate";

import {
  MovieModel,
  MovieDimensionType,
  MovieDigitalType,
  HotMovieData,
  CastModel
} from "mock-data/home/movies";
import { DateFormat } from "utils/strings";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { CastAvatar } from "screens/MovieTicket/MovieTicketDetailScreen/components/CastAvatar";
import ScrollMenu from "react-horizontal-scrolling-menu";

interface Props {
  movie: MovieModel;
  className?: string;
}

const UpcomingListMovies = (casts: CastModel[]) => {
  return casts.map(el => {
    const { name, src } = el;
    return <CastAvatar name={name} src={src} key={name} />;
  });
};

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;

export const MovieTicketDeatilScreenInfo: React.FC<Props> = props => {
  const { movie, className } = props;
  const {
    title,
    description,
    digitalType,
    dimensionType,
    director,
    duration,
    casts,
    releaseDate
  } = movie;
  const subTx = `${MovieDimensionType[dimensionType]} | ${
    MovieDigitalType[digitalType]
  } | ${duration} | ${moment(releaseDate).format(DateFormat)}`;

  const onShowing = UpcomingListMovies(casts);

  return (
    <div className={className}>
      <div className="mb-12">
        <p className="text__h1 color__primary">{title}</p>
        <br />
        <p className="text__d1 color__blue-grey opacity-50">{subTx}</p>
      </div>

      <p className="text__h2 color__grey mb-8">Information</p>
      <TextTruncate
        line={4}
        element="span"
        className="text__b1 color__blue-grey mb-8"
        text={description}
      />

      <p className="text__h2 color__grey mb-4">Director:</p>
      <p className="text__b1 color__blue-grey mb-8">{director}</p>

     
    </div>
  );
};
