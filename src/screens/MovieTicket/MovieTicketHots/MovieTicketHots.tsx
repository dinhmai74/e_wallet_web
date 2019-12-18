import React, { useState, useEffect } from "react";
import { Wallpaper } from "components/Wallpaper";
import { Footer } from "screens/MovieTicket/MovieTicketHots/components/Footer";
import { images } from "theme";
import { HotMovieData } from "mock-data/home/movies";
import { useInterval, useBoolean } from "react-use";
import { useHotMovie } from "screens/MovieTicket/MovieTicketHots/useHotMovie";
import styles from "./MovieTicketHots.module.scss";
import cx from "classnames";

export const MovieTicketHots: React.FC = ({}) => {
  const { movie, isChanging } = useHotMovie();
  const { title, description, source } = movie;
  const anim = isChanging ? "anim--fadeIn" : "";

  return (
    <div className="min-h-screen pt-40 ">
      <div className={`px-24`}>
        <div className={"flex flex-row"}>
          <div className={"pr-24"}>
            <p className={`text__t1 color__grey ${anim}`}>{title}</p>
            <br />
            <div className="flex flex-row">
              <p
                className={
                  (cx(`text__b1 ${anim} z-10 relative`), styles.description)
                }
              >
                {description}
              </p>
            </div>
          </div>
          <img
            src={source.uri}
            alt="poster"
            className={`img__poster relative z-10 mr-20 hidden md:block lg:block xl:block`}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
