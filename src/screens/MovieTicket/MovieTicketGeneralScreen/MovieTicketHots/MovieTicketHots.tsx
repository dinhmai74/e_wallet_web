import cx from "classnames";
import React from "react";
import TextTruncate from "react-text-truncate";

import { Footer } from "screens/MovieTicket/MovieTicketGeneralScreen/MovieTicketHots/components/Footer";
import { Poster } from "screens/MovieTicket/MovieTicketGeneralScreen/MovieTicketHots/components/Poster";
import { useHotMovie } from "screens/MovieTicket/MovieTicketGeneralScreen/MovieTicketHots/useHotMovie";
import styles from "./MovieTicketHots.module.scss";

export const MovieTicketHots: React.FC = () => {
  const { movie, isChanging, setNextMovie } = useHotMovie();
  const { title, description, source } = movie;
  const anim = isChanging ? "anim--fadeIn" : "";

  return (
    <div className="md:min-h-screen pt-56 md:pt-40 ">
      <div className={`px-24`}>
        <p className="text__h1 my-8 md:hidden ">Hot movie</p>
        <div className={"flex flex-row"}>
          <InfoContent description={description} title={title} anim={anim} />

          <Poster src={source.uri} setNextMovie={setNextMovie} />
        </div>
      </div>

      <Footer movie={movie} isChanging={isChanging} />
    </div>
  );
};

export const InfoContent: React.FC<{
  anim: string;
  title: string;
  description: string;
}> = ({ anim, title, description }) => {
  return (
    <div className={"md:pr-24 md:w-3/4"}>
      <p className={`text__t1 color__grey ${anim}`}>{title}</p>
      <br />
      <div className="flex flex-row">
        <TextTruncate
          line={3}
          element="span"
          className={(cx(`text__b1 ${anim}`), styles.description)}
          truncateText="…"
          text={description}
        />
      </div>
    </div>
  );
};
