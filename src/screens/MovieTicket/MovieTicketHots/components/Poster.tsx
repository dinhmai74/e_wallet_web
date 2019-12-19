import React from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { RoundedButton } from "components/RoundedButtonIcon";
import { metrics } from "theme/metrics";
import styles from "../MovieTicketHots.module.scss";
import cx from "classnames";
import { NextMovieType } from "../useHotMovie";

interface Props {
  src: string;
  setNextMovie: (type: NextMovieType) => void;
}

export const Poster: React.FC<Props> = props => {
  const { src, setNextMovie } = props;
  return (
    <div className="flex-row hidden md:block lg:block xl:block">
      <div className="relative z-10 img__poster">
        <img src={src} alt="poster" className="z-10 mr-20 img__poster" />

        <RoundedButton
          className={cx("", styles["icon--left"], styles.icon)}
          onClick={() => setNextMovie("pre")}
        >
          <ArrowBackIosRoundedIcon style={{ fontSize: metrics.icon.sm }} />
        </RoundedButton>

        <RoundedButton
          className={cx("", styles["icon--right"], styles.icon)}
          onClick={() => {
            setNextMovie("next");
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: metrics.icon.sm }} />
        </RoundedButton>
      </div>
    </div>
  );
};
