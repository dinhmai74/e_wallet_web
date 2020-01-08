import {
  MovieDigitalType,
  MovieDimensionType,
  MovieModel
} from "mock-data/home/movies";
import moment from "moment";
import React from "react";
import { ImgMovieHooray } from "theme/images";
import { DateFormat } from "utils/strings";

interface Props {
  movie: MovieModel;
}

export const MovieTicketChoseInfoScreenInfoSide: React.FC<Props> = props => {
  const { movie } = props;
  const { title, releaseDate, digitalType, dimensionType, duration } = movie;

  const subTx = `${MovieDimensionType[dimensionType]} | ${
    MovieDigitalType[digitalType]
  } | ${duration} min | ${moment(releaseDate).format(DateFormat)}`;
  return (
    <div className="w-2/6 bg__bg-5 min-h-screen hidden md:inline-block pt-32">
      <div className="fixed">
        <p className="text-center text__h1 text-primary">{title}</p>
        <br />
        <p className="text__d1 color__blue-grey text-center">{subTx}</p>

        <ImgMovieHooray className="mx-auto mt-16" />
      </div>
    </div>
  );
};
