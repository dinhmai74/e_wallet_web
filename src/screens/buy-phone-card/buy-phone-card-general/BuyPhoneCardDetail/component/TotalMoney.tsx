import React, { useState } from "react";
import { AppButton } from "components";
import { useHistory } from "react-router";
import { Card, TextField } from "@material-ui/core";

type HeroType = "left" | "right";

export interface HeroModel {
  quantity: string;
  src: string;
  type?: HeroType;
  imgStyle?: string;
  navigateTo?: string;
  buttonTx?: string;
  total?: string;
  money?: string;
}

export const TotalMoney: React.FC<HeroModel> = ({
  imgStyle,
  quantity,
  src,
  type,
  navigateTo,
  buttonTx,
  total,
  money
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
        variant="outlined"
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
          <div className="flex flex-row pb-12">
            <p className={`text__h2 color__grey font-bold pr-16 pt-4`}>
              {quantity}
            </p>
            <TextField
              id="filled-size-small"
              label=""
              autoComplete="current-password"
              variant="outlined"
              className="pr-12"
              value={totalValue}
              onChange={e => {
                setValue(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row pb-4">
            <p className={`text__h2 color__grey font-bold text-center pr-32`}>
              {total}
            </p>
            <p className={`text__h2 color__primary  font-bold pl-6`}>
              {money}d
            </p>
          </div>
          {renderButton()}
        </div>
      </Card>
      {type === "right" && renderImg()}
    </div>
  );
};

TotalMoney.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};