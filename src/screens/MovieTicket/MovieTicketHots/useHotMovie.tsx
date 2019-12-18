import React, { useState, useEffect } from "react";
import { useBoolean, useInterval } from "react-use";
import { HotMovieData } from "mock-data/home/movies";
const nextMovieTime = 5000;

export const useHotMovie = () => {
  const [idx, setIdx] = useState(0);
  const [delay, setDelay] = useState(nextMovieTime);
  const [movie, setMovie] = useState(HotMovieData[0]);
  const [isRunning, toggleIsRunning] = useBoolean(true);
  const [isChanging, setIsChanging] = useBoolean(false);

  useInterval(
    () => {
      if (idx >= HotMovieData.length - 1) {
        setIdx(0);
      } else {
        setIdx(idx + 1);
      }
      setMovie(HotMovieData[idx]);
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, nextMovieTime / 2);
  }, [movie]);

  return {
    movie,
    isChanging
  };
};
