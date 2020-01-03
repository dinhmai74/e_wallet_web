import { HeroCard, Screen } from "components";
import React from "react";
import { ChooseCardType } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ChooseCardType";
import { images } from "theme";

export const BuyPhoneCardDetail: React.FC = () => {
  return (
    <Screen className="px-0">
      <img src={images.phoneCard.bgPhoneCardDetail} alt="" />
      <HeroCard
        type="left"
        src={images.iconProvider.viettel}
        title="Viettel mobile card"
        content={["Region: VN", "Discount: 4%"]}
      />

      <ChooseCardType />
    </Screen>
  );
};
