import React from "react";
import { MovieModel } from "mock-data/home/movies";

interface Props {
  movie: MovieModel;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const { source, title } = movie;
  return (
    <div className="z-10 mr-20 my-0 md:my-8 ">
      <img src={source.uri} alt="poster" className="img__movie--normal" />
      <p className="text__h4 color__steel text-center mt-4">{title}</p>
    </div>
  );
};
