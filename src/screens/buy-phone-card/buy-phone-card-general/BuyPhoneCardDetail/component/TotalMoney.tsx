import React from "react";
import { AppButton } from "components";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import colors from "theme/color/_colors.scss";
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
  money?: number;
  value?: number;
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    boxShadow: `0 0 15px 0 rgba(0, 0, 0, 0.1)`,
    borderRadius: 10,
    backgroundColor: colors.white,
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "60%" // 16:9
  }
}));

export const TotalMoney: React.FC<HeroModel> = ({
  imgStyle,
  quantity,
  src,
  type,
  navigateTo,
  buttonTx,
  total,
  money,
  value
}) => {
  let txMargin = "";
  const imgMargin = "";
  if (type === "right") {
    txMargin = "ml-20 ";
  } else {
    txMargin = "ml-10";
  }

  const history = useHistory();
  const classes = useStyles();

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
              value={value}
            />
          </div>
          <div className="flex flex-row pb-4">
            <p className={`text__h2 color__grey font-bold text-center pr-32`}>
              {total}
            </p>
            <p className={`text__h2 color__primary  font-bold pl-6`}>{value}</p>
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
