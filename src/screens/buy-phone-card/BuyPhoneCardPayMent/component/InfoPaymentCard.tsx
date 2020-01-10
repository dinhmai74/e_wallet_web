import { InformationCard } from "components/InformationCard";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import React from "react";
import { useHistory } from "react-router";
type HeroType = "left" | "right";

export interface HeroModel {
  provider: string;
  price: string;
  quantity: string;
  src: string;
  type?: HeroType;
  imgStyle?: string;
  navigateTo: string;
  buttonTx?: string;
  total?: string;
  money?: string;
  totalAmount: number;
  isSelectedPayment: boolean;
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
  totalAmount,
  isSelectedPayment
}) => {
  const history = useHistory();

  const renderImg = () => (
    <img
      src={`${process.env.PUBLIC_URL}/${src}`}
      className={`self-center  ${imgStyle} hidden img__decorate sm:hidden md:hidden lg:block xl:block pt-12`}
      alt="illstration"
    />
  );

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
        <p className="text__h3 color__steel mb-4 py-6">Information</p>
        <InformationCard
          totalAmount={totalAmount}
          onSubmit={() => history.push(navigateTo)}
          disabledButton={!isSelectedPayment}
          buttonTx={buttonTx + ""}
        >
          <RowTextSpaceBetween
            leftTx="Provider:"
            leftClassName="text-blueGrey font-normal"
            rightTx={provider}
            className="mb-8"
          />
          <RowTextSpaceBetween
            leftTx="Price:"
            leftClassName="text-blueGrey font-normal"
            rightTx={price}
            className="mb-8"
          />

          <RowTextSpaceBetween
            leftTx="Quantity:"
            leftClassName="text-blueGrey font-normal"
            rightTx={quantity}
            className="mb-8"
          />
        </InformationCard>
      </div>
    </div>
  );
};

InfoPaymentCard.defaultProps = {
  type: "left",
  imgStyle: "img__decorate "
};
