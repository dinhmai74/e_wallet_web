import React from "react";
import { Screen, HeroCard } from "components";
import { images } from "theme";
import { ChooseCardType } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ChooseCardType";

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
