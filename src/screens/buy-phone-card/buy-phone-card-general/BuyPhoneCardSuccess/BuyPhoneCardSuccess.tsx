import React from "react";

import { Screen } from "components";
import { images } from "theme/images";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { PurchasedCard } from "components/PurchasedCard";

interface Props {}

export const BuyPhoneCardSuccess: React.FC<Props> = props => {
  return (
    <Screen className="flex flex-row">
      <div className="flex flex-col mt-40 mx-12 lg:mx-32 md:mx-24 flex-1">
        <p className="text__h2 color__steel mb-12 font-bold">
          Purchased cards:
        </p>
        <PurchasedCard src={images.iconProvider.viettel} />
        <PurchasedCard src={images.iconProvider.viettel} />
        <PurchasedCard src={images.iconProvider.viettel} />
      </div>

      <div className="w-1/2 bg__bg-5 min-h-screen hidden md:inline-block pt-32 justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/${images.success}`}
          className="img__decorate mx-auto my-4"
          alt="illu"
        />
        <p className="text__d2 color__blue-grey text__center">
          Purchase successful
        </p>
        <RowTextSpaceBetween
          leftTx="Transaction id:"
          rightTx={"6a384584d707"}
          leftClassName="text__h2 color__steel"
          rightClassName="text__h2 color__blue-grey"
          className="m-24"
        />
      </div>
    </Screen>
  );
};