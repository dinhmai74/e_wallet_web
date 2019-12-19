import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Screen } from "components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import { MovieTicketHots } from "./MovieTicketHots";
import "./MovieTicketGenenralScreen.scss";
import { MovieData } from "mock-data/home/movies";

const UpcomingMenu = selected =>
  MovieData.map(el => {
    const className =
      "bg-blueGrey w-1 h-1 p-20 m-4 hover:bg-red" + `${selected && "bg__bg"}`;
    return (
      <div key={el.id} className={className}>
        {el.title}
      </div>
    );
  });

const Arrow = ({ text, className }) => {
  return <ArrowBackIos className={className}>{text}</ArrowBackIos>;
};

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;

export const MovieTicketGeneral: React.FC = () => {
  const [onSelect, setOnSelect] = useState();
  const onShowing = UpcomingMenu(onSelect);
  return (
    <Screen className="">
      <MovieTicketHots />

      <ScrollMenu
        data={onShowing}
        arrowLeft={ArrowLeft()}
        arrowRight={ArrowRight()}
        selected={"0"}
        onSelect={setOnSelect}
      />
    </Screen>
  );
};
