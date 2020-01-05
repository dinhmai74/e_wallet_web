import moment from "moment";
import React from "react";
import TextTruncate from "react-text-truncate";

import {
  MovieDigitalType,
  MovieDimensionType,
  MovieModel
} from "mock-data/home/movies";
import { useBoolean } from "react-use";
import { DateFormat } from "utils/strings";

interface Props {
  movie: MovieModel;
  className?: string;
}

export const MovieTicketDeatilScreenInfo: React.FC<Props> = props => {
  const { movie, className } = props;
  const {
    title,
    description,
    digitalType,
    dimensionType,
    director,
    duration,
    releaseDate
  } = movie;
  const subTx = `${MovieDimensionType[dimensionType]} | ${
    MovieDigitalType[digitalType]
  } | ${duration} min | ${moment(releaseDate).format(DateFormat)}`;

  return (
    <div className={className}>
      <div className="mb-12">
        <p className="text__h1 color__primary">{title}</p>
        <br />
        <p className="text__d1 color__blue-grey opacity-50">{subTx}</p>
      </div>

      <RenderDescription description={description} />

      <p className="text__h2 color__grey mb-4">Director:</p>
      <p className="text__b1 color__blue-grey mb-8">{director}</p>
    </div>
  );
};

const RenderDescription: React.FC<{ description: string }> = ({
  description
}) => {
  const [showFull, setShowFull] = useBoolean(false);
  const className = "text__b1 color__blue-grey mb-8";

  return (
    <div>
      <p className="text__h2 color__grey mb-8">Information</p>
      {showFull ? (
        <p className={className}>{description}</p>
      ) : (
        <TextTruncate
          line={4}
          element="span"
          className={className}
          text={description}
        />
      )}
      <p
        className="text-right cursor-pointer"
        onClick={() => setShowFull(!showFull)}
      >
        {showFull ? (
          <i className="material-icons">keyboard_arrow_up</i>
        ) : (
          <i className="material-icons">keyboard_arrow_down</i>
        )}
      </p>
    </div>
  );
};
