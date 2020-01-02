import React from "react";
import { Screen, HeroCard } from "components";
import { images } from "theme";
import { ChooseCardType } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ChooseCardType";

export const BuyGameCardDetail: React.FC = () => {
  return (
    <Screen className="px-0">
      <img src={`${process.env.PUBLIC_URL}/${images.phoneCard.bgPhoneCardDetail}`} alt="logo" />
      <HeroCard
        type="left"
        src={images.gameCard.iconGarena}
        title="Garena card"
        content={["Region: VN", "Discount: 4%"]}
      />

      <ChooseCardType />
    </Screen>
  );
};
