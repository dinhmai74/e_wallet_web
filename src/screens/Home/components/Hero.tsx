import { AppButton } from "components";
import React from "react";
import { useHistory } from "react-router";
import { animated, useSpring } from "react-spring";
import { useWindowSize } from "react-use";
import "./hero.scss";

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

  const containerClassName =
    "flex flex-row sm:items-center sm:justify-center py-24 self-stretch max-h-screen px-12 md:pl-32";

  const [props, set] = useSpring(() => ({ x: 0, opacity: 100 }));

  const { width } = useWindowSize();

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
        onClick={() => {
          if (width > 1000) set({ x: 100, opacity: 0 });
          else history.push(navigateTo + "");
        }}
      />
    );
  };

  return (
    <animated.div
      className={containerClassName}
      onAnimationEnd={() => history.push(navigateTo + "")}
      style={{
        opacity: props.opacity,
        transform: props.x.interpolate(x => {
          const sign = type === "right" ? "" : "-";
          return `translateX(${sign}${x}%)`;
        })
      }}
    >
      <div
        className="flex flex-1"
        data-aos={`fade-${type}`}
        data-aos-delay="50"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        {type === "left" && (
          <HeroImg imgMargin={imgMargin} src={src} imgStyle={imgStyle} />
        )}
        <div className={`self-center ${txMargin}`}>
          <p className={`text__t1 color__grey`}>{title}</p>
          <br />
          <Lines content={content} />
          {renderButton()}
        </div>
        {type === "right" && (
          <HeroImg imgMargin={imgMargin} src={src} imgStyle={imgStyle} />
        )}
      </div>
    </animated.div>
  );
};

Hero.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};

const HeroImg: React.FC<{
  src: string;
  imgMargin?: string;
  imgStyle?: string;
}> = ({ src, imgMargin, imgStyle }) => {
  return (
    <img
      src={src}
      className={`self-center ${imgMargin} ${imgStyle} hidden img__decorate sm:hidden md:hidden lg:block xl:block`}
      alt="illstration"
    />
  );
};
