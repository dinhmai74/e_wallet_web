import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Screen } from "components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import { MovieTicketHots } from "./MovieTicketHots";
import "./MovieTicketGenenralScreen.scss";
import { MovieData } from "mock-data/home/movies";
import { MovieCard } from "screens/MovieTicket/components/MovieCard";

const UpcomingListMovies = () =>
  MovieData.map(el => {
    const { id } = el;
    return <MovieCard movie={el} key={id} />;
  });

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;

export const MovieTicketGeneral: React.FC = () => {
  const [, setOnSelect] = useState();
  const onShowing = UpcomingListMovies();
  return (
    <Screen className="">
      <MovieTicketHots />

      <div className="my-20 px-20">
        <div>
          <div className="flex-row flex justify-between pb-8">
            <p className="text__h1 color__grey">Comming soon</p>
            <p className="color__steel">See all</p>
          </div>
          <ScrollMenu
            alignCenter={false}
            data={onShowing}
            arrowLeft={ArrowLeft()}
            arrowRight={ArrowRight()}
            onSelect={idx => {
              setOnSelect(idx);
            }}
          />
        </div>
      </div>

      <div className="my-20 px-20">
        <div>
          <div className="flex-row flex justify-between pb-8">
            <p className="text__h1 color__grey">Upcoming </p>
            <p className="color__steel">See all</p>
          </div>
          <ScrollMenu
            alignCenter={false}
            data={onShowing}
            arrowLeft={ArrowLeft()}
            arrowRight={ArrowRight()}
            onSelect={idx => {
              setOnSelect(idx);
            }}
          />
        </div>
      </div>
    </Screen>
  );
};
