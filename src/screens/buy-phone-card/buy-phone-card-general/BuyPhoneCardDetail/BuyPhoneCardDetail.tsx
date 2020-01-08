import { ProviderLogoHeader, Screen } from "components";
import React from "react";
import { ChooseCardType } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ChooseCardType";
import { images } from "theme";

export const BuyPhoneCardDetail: React.FC = () => {
  return (
    <Screen className="px-4 md:px:0">
      <img
        src={images.phoneCard.bgPhoneCardDetail}
        alt=""
        className="absolute inset-0 z-0"
      />
      <div className="flex flex-col absolute inset-0 z-10 mt-56 px-12 md:px-0">
        <ProviderLogoHeader
          type="left"
          src={images.iconProvider.viettel}
          imgStyle="p-8"
          containerStyle="mb-12"
          title="Viettel mobile card"
          content={["Region: VN", "Discount: 4%"]}
        />

        <ChooseCardType navigate="/buy-phone-card-payment" />
      </div>
    </Screen>
  );
};
