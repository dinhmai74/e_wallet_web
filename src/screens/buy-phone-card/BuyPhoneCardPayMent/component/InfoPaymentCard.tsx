import Divider from "@material-ui/core/Divider";
import { AppButton } from "components";
import React from "react";
import { useHistory } from "react-router";
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
  totalAmount?: string;
}

export const InfoPaymentCard: React.FC<HeroModel> = ({
  imgStyle,
  quantity,
  price,
  provider,
  src,
  type,
  navigateTo,
  buttonTx,
  totalAmount
}) => {
  const imgMargin = "";
  // let txMargin = "";
  // if (type === "right") {
  //   txMargin = "ml-20 ";
  // } else {
  //   txMargin = "ml-10";
  // }

  const history = useHistory();
  const renderImg = () => (
    <img
      src={src}
      className={`self-center ${imgMargin} ${imgStyle} hidden img__decorate sm:hidden md:hidden lg:block xl:block pt-12`}
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
        className=" text__b1 mb-6"
        onClick={() => history.push(navigateTo)}
      />
    );
  };

  const containerClassName = "flex flex-row items-center justify-center pt-12";
  return (
    <div
      className={containerClassName}
      data-aos={`fade-${type}`}
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {type === "left" && renderImg()}
      <div className="flex flex-col">
        <p className="text__h3 color__steel mb-4 px-12 py-6">Information</p>
        <div className="max-w-full  overflow-hidden shadow-md px-8 py-4 cursor-pointer  ml-12">
          <div className=" pt-4">
            <div className="flex flex-row pb-6 justify-center align-center">
              <p className={`text__d1 color__blue-grey font-medium pr-48 pl-2`}>
                Provider:
              </p>
              <p className="text__b1 color__grey font-medium text-right pl-20">
                {provider}
              </p>
            </div>
            <div className="flex flex-row pb-6 justify-center align-center">
              <p className={`text__d1 color__blue-grey font-medium pr-48`}>
                Price:
              </p>
              <p className="text__b1 color__grey font-medium text-right pl-20 ">
                {price}d
              </p>
            </div>
            <div className="flex flex-row pb-6  justify-center align-center">
              <p className={`text__d1 color__blue-grey font-medium pr-56`}>
                Quantity:
              </p>
              <p
                className={`text__b1 color__grey font-medium  text-right pl-20`}
              >
                {quantity}{" "}
              </p>
            </div>
            <Divider />
            <div className="flex flex-row pb-6  pt-6  justify-center align-center">
              <p className={`text__d1 color__blue-grey font-medium pr-32`}>
                Total amount:{" "}
              </p>
              <p className={`text__b1 color__primary font-medium pl-20`}>
                {totalAmount}{" "}
              </p>
            </div>
            <div className="">{renderButton()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoPaymentCard.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};
