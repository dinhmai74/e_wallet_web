import React from "react";
import { AppButton } from "components";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import colors from "theme/color/_colors.scss";
import { Card, } from "@material-ui/core";

type HeroType = "left" | "right";

export interface HeroModel {
  title: string;
  content: string[];
  src: string;
  type?: HeroType;
  imgStyle?: string;
  navigateTo?: string;
  buttonTx?: string;
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    boxShadow: `0 0 15px 0 rgba(0, 0, 0, 0.1)`,
    borderRadius: 10,
    backgroundColor: colors.white,
    maxWidth: 345,
    marginBottom: 30
  },
  media: {
    height: 0,
    paddingTop: "60%" // 16:9
  }
}));

const Lines: React.FC<{ content: string[] }> = ({ content }) => {
  return (
    <>
      {content.map((val, idx) => (
        <React.Fragment key={idx}>
          <p className="text__h2 color__blue-grey font-normal" key={idx}>
            {val}
          </p>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export const HeroCard: React.FC<HeroModel> = ({
  imgStyle,
  title,
  content,
  src,
  type,
  navigateTo,
  buttonTx
}) => {
  let txMargin = "";
  const imgMargin = "";

  if (type === "right") {
    txMargin = "ml-20";
  } else {
    txMargin = "ml-20";
  }

  const history = useHistory();
  const classes = useStyles();

  const renderImg = () => (
    <Card className={classes.card}>
      <img
        src={src}
        className={`self-center ${imgMargin} ${imgStyle} hidden img__decorate sm:hidden md:hidden lg:block xl:block`}
        alt="illstration"
      />
    </Card>
  );

  const renderButton = () => {
    if (navigateTo === undefined) {
      return null;
    }

    return (
      <AppButton
        fullWidth
        color="primary"
        variant="outlined"
        tx={buttonTx}
        className="mt-6 text__b1"
        onClick={() => history.push(navigateTo)}
      />
    );
  };

  const containerClassName =
    "flex flex-row items-center justify-center absolute inset-y-0 right-0 left-0 ";
  return (
    <div
      className={containerClassName}
      data-aos={`fade-${type}`}
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {type === "left" && renderImg()}
      <div className={`self-center ${txMargin}`}>
        <p className={`text__t1 color__grey  font-bold`}>{title}</p>
        <br />
        <Lines content={content} />
        {renderButton()}
      </div>
      {type === "right" && renderImg()}
    </div>
  );
};

HeroCard.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};
