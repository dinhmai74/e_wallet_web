import { HotMovieData } from "mock-data/home/movies";
import { useEffect, useState } from "react";
import { useBoolean, useInterval } from "react-use";
const nextMovieTime = 5000;

export const useHotMovie = () => {
  const [idx, setIdx] = useState(0);
  const [delay] = useState(nextMovieTime);
  const [movie, setMovie] = useState(HotMovieData[0]);
  const [isRunning] = useBoolean(true);
  const [isChanging, setIsChanging] = useBoolean(false);
  const [changeInterval, setChangeInterval] = useBoolean(true);

  const nextIdx = () => {
    if (idx >= HotMovieData.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };

  const preIdx = () => {
    if (idx <= 0) {
      setIdx(HotMovieData.length - 1);
    } else {
      setIdx(idx - 1);
    }
  };

  const nextMovie = () => () => {
    nextIdx();
    setNewMovieBaseOnIdx();
    setChangeInterval(true);
  };

  useInterval(nextMovie(), isRunning ? delay : null);

  useEffect(() => {
    if (!changeInterval) {
      return;
    }
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, nextMovieTime / 2);
  }, [movie, setIsChanging, changeInterval]);

  const setNewMovie = (type: NextMovieType) => {
    type === "next" ? nextIdx() : preIdx();
    setChangeInterval(false);
    setNewMovieBaseOnIdx();
  };

  const setNewMovieBaseOnIdx = () => {
    setMovie(HotMovieData[idx]);
  };
  return {
    movie,
    isChanging,
    setNextMovie: setNewMovie
  };
};

export type NextMovieType = "next" | "pre";
