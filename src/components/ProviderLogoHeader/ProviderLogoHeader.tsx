import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import colors from "theme/color/_colors.scss";

type HeroType = "left" | "right";

export interface HeroModel {
  title: string;
  content: string[];
  src: string;
  type?: HeroType;
  imgStyle?: string;
  containerStyle?: string;
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

export const ProviderLogoHeader: React.FC<HeroModel> = ({
  imgStyle,
  containerStyle,
  title,
  content,
  src,
  type
}) => {
  let txMargin = "";
  const imgMargin = "";

  if (type === "right") {
    txMargin = "md:mx-20";
  } else {
    txMargin = "md:ml-20";
  }

  const classes = useStyles();

  const renderImg = () => (
    <div className={classes.card}>
      <img
       src={`${process.env.PUBLIC_URL}/${src}`}
        className={`self-center ${imgMargin} ${imgStyle} hidden img__decorate sm:hidden md:hidden lg:block xl:block px-12`}
        alt="illstration"
      />
    </div>
  );

  const containerClassName =
    "md:flex md:flex-row md:items-center md:justify-center  " + containerStyle;
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
      </div>
      {type === "right" && renderImg()}
    </div>
  );
};

ProviderLogoHeader.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};
