import { ProviderLogoHeader, Screen } from "components";
import React from "react";
import { ChooseCardType } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ChooseCardType";
import { images } from "theme";
import { Paths } from "router/PrimaryRouters";

export const BuyGameCardDetail: React.FC = () => {
  return (
    <Screen className="px-4 md:px:0">
      <img
        src={`${process.env.PUBLIC_URL}/${images.phoneCard.bgPhoneCardDetail}`}
        alt="logo"
        className="absolute inset-0 z-0"
      />
      <div className="flex flex-col absolute inset-0 z-10 mt-56 px-12 md:px-0">
        <ProviderLogoHeader
          type="left"
          src={images.gameCard.iconGarena}
          title="Garena card"
          content={["Region: VN", "Discount: 4%"]}
        />

        <ChooseCardType navigate={Paths.buyGameCardPayment} />
      </div>
    </Screen>
  );
};
