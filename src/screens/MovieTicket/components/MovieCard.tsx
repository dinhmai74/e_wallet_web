import { MovieModel } from "mock-data/home/movies";
import React from "react";
import { animated } from "react-spring";
import { useHoverEffect } from "utils/animations/useAnimations";

interface Props {
  movie: MovieModel;
  onClick: (id: string) => void;
}

export const MovieCard: React.FC<Props> = ({ movie, onClick }) => {
  const { source, title, id } = movie;
  const [props, set, calc, trans] = useHoverEffect();
  return (
    <animated.div
      className="z-10 mr-20 my-0 md:my-8 "
      onClick={() => onClick(id || "")}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // @ts-ignore
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <img src={source.uri} alt="poster" className="img__movie--normal" />
      <p className="text__h4 color__steel text-center mt-4">{title}</p>
    </animated.div>
  );
};
