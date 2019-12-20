import React from "react";
import { MovieModel } from "mock-data/home/movies";

interface Props {
  movie: MovieModel;
  onClick: (id: string) => void;
}

export const MovieCard: React.FC<Props> = ({ movie, onClick }) => {
  const { source, title, id } = movie;
  return (
    <div className="z-10 mr-20 my-0 md:my-8 " onClick={() => onClick(id || "")}>
      <img src={source.uri} alt="poster" className="img__movie--normal" />
      <p className="text__h4 color__steel text-center mt-4">{title}</p>
    </div>
  );
};
