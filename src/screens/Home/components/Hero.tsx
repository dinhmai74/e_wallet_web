import React from "react";
import { AppButton } from "components";
import { useHistory } from "react-router";

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

const Lines: React.FC<{ content: string[] }> = ({ content }) => {
  return (
    <>
      {content.map((val, idx) => (
        <React.Fragment key={idx}>
          <p className="text__h2 color__steel font-normal" key={idx}>
            {val}
          </p>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export const Hero: React.FC<HeroModel> = ({
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
    txMargin = "md:mx-20";
  } else {
    txMargin = "md:ml-20";
  }

  const history = useHistory();

  const renderImg = () => (
    <img
      src={src}
      className={`self-center ${imgMargin} ${imgStyle} hidden img__decorate sm:hidden md:hidden lg:block xl:block`}
      alt="illstration"
    />
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
    "flex flex-row sm:items-center sm:justify-center py-24 self-stretch max-h-screen pl-32 sm:pl-0";
  return (
    <div
      className={containerClassName}
      data-aos={`fade-${type}`}
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      {type === "left" && renderImg()}
      <div className={`self-center ${txMargin}`}>
        <p className={`text__t1 color__grey`}>{title}</p>
        <br />
        <Lines content={content} />
        {renderButton()}
      </div>
      {type === "right" && renderImg()}
    </div>
  );
};

Hero.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};
