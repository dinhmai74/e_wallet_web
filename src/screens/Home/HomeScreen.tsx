import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
// import styles from "./Home.module.scss";
// import cx from "classnames"; // Optional classname helper library

import { Screen } from "components";

import { Hero, HeroModel } from "./components/Hero";
import { images } from "theme";

interface Props extends RouteComponentProps {
  [rest: string]: any;
}

const HerosHome: HeroModel[] = [
  {
    src: images.home.general,
    title: "Buy, your way.",
    content: ["Cashback savings.", "Everyday gift.", "Purchase quickly."],
    type: "left"
  },
  {
    src: images.home.transfer,
    title: "Transfer money",
    content: [
      "Quicky, easy and efficient .",
      "Your time is money.",
      "Let us take care of that."
    ],
    type: "right"
  },
  {
    src: images.home.train,
    title: "Train ticket",
    content: [
      "Easy as 1, 2, 3.",
      "Get there your way.",
      "Every time, anywhere."
    ]
  },

  {
    src: images.home.mobile,
    title: "Mobile card",
    content: [
      "With us, discount is just a number.",
      "More buy, more discount."
    ],
    type: "right",
    imgStyle: "img__decorate--mobile-card",
    navigateTo: "buy-phone-card-detail",
    buttonTx: "Buy Mobile Card"
  },
  {
    src: images.home.movie,
    title: "Movie ticket",
    content: [
      "Easy purchase, easy life.",
      "Don’t lose your mood.",
      "Let’s go to the theater."
    ],
    navigateTo: "movie-ticket",
    buttonTx: "Buy ticket"
  },

  {
    src: images.home.gaming,
    title: "Game card",
    type: "right",
    content: ["More money, more power.", "Let rule the game."]
  }
];

export const HomeScreen: React.FC<Props> = () => {
  const renderHeros = () => {
    return HerosHome.map((val, idx) => <Hero key={idx} {...val} />);
  };

  return <Screen>{renderHeros()}</Screen>;
};
