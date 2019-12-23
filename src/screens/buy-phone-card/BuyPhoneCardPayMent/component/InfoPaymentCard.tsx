import React, { useState } from "react";
import { AppButton } from "components";
import { useHistory } from "react-router";
import { Card, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
type HeroType = "left" | "right";

export interface HeroModel {
  provider?: string;
  price?: string;
  quantity?: string;
  src: string;
  type?: HeroType;
  imgStyle?: string;
  navigateTo?: string;
  buttonTx?: string;
  total?: string;
  money?: string;
}

export const InfoPaymentCard: React.FC<HeroModel> = ({
  imgStyle,
  quantity,
  price,
  provider,
  src,
  type,
  navigateTo,
  buttonTx
}) => {
  let txMargin = "";
  const imgMargin = "";
  if (type === "right") {
    txMargin = "ml-20 ";
  } else {
    txMargin = "ml-10";
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
        variant="contained"
        tx={buttonTx}
        className="mt-6 text__b1"
        onClick={() => history.push(navigateTo)}
      />
    );
  };

  const containerClassName = "flex flex-row items-center justify-center";
  const [totalValue, setValue] = useState();
  return (
    <div
      className={containerClassName}
      data-aos={`fade-${type}`}
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {type === "left" && renderImg()}
      <Card className="pt-12 pb-12 ml-12 ">
        <div className={`self-center ${txMargin}`}>
          <div className="flex flex-row pb-6">
            <p className={`text__d1 color__blue-grey font-medium pr-48`}>
              Provider:
            </p>
            <p className="text__b1 color__grey font-medium  pr-16">
              {provider}
            </p>
          </div>
          <div className="flex flex-row pb-6">
            <p className={`text__d1 color__blue-grey font-medium pr-48`}>
              Price:{" "}
            </p>
            <p className={`text__b1 color__grey font-medium pl-6 pr-16`}>
              {price}{" "}
            </p>
          </div>
          <div className="flex flex-row pb-6">
            <p className={`text__d1 color__blue-grey font-medium pr-48`}>
              Quantity:{" "}
            </p>
            <p className={`text__b1 color__grey font-medium pl-6  pr-16`}>
              {quantity}{" "}
            </p>
          </div>
          <Divider variant="middle" />
          <div className="mr-8">{renderButton()}</div>
        </div>
      </Card>
      {type === "right" && renderImg()}
    </div>
  );
};

InfoPaymentCard.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};
