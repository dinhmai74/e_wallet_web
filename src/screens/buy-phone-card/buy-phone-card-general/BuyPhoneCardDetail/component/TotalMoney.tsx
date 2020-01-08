import { TextField } from "@material-ui/core";
import { AppButton, AppCard } from "components";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { formatMoney, unitTx } from "utils/number";

type HeroType = "left" | "right";

export interface HeroModel {
  quantity: string;
  src: string;
  type?: HeroType;
  imgStyle?: string;
  navigateTo?: string;
  buttonTx: string;
  total: string;
  money: number;
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
    txMargin = "md:mr-20 ";
  } else {
    txMargin = "md:ml-20 ";
  }

  const history = useHistory();
  const renderImg = () => (
    <img
      src={`${process.env.PUBLIC_URL}/${src}`}
      className={`self-center ${imgMargin} ${imgStyle} hidden img__decorate sm:hidden md:hidden lg:block xl:block`}
      alt="illstration"
      style={{
        width: 400
      }}
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
        tx={buttonTx}
        className="mt-6 text__b1"
        onClick={() =>
          history.push(navigateTo, {
            money
          })
        }
      />
    );
  };

  const [totalQuantity, setQuantity] = useState();
  return (
    <div
      className="flex flex-row items-center justify-center "
    >
      {type === "left" && renderImg()}
      <AppCard className={txMargin + " px-8 py-8 "}>
        <div className="flex flex-row justify-between items-center mb-8">
          <p className="color__steel font__medium mx-2 w-2/3">{quantity}</p>
          <TextField
            id="outlined-size-small"
            variant="outlined"
            className="mx-4"
            size="small"
            value={totalQuantity}
            onChange={e => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <RowTextSpaceBetween
          leftTx={total}
          rightTx={formatMoney(money * totalQuantity) + unitTx}
          rightClassName="text-primary"
        />
        {renderButton()}
      </AppCard>
      {type === "right" && renderImg()}
    </div>
  );
};

TotalMoney.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};
