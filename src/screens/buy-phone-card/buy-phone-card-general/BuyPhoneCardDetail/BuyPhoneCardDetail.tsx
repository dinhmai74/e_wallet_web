import React from "react";
import { Screen, HeroCard } from "components";
import { images } from "theme";
import { Hero } from "screens/Home/components/Hero";

export const BuyPhoneCardDetail: React.FC = () => {
  return (
    <Screen className="px-0">
      <img src={images.phoneCard.bgPhoneCardDetail} />
      <HeroCard
        type="left"
        src={images.iconProvider.viettel}
        title="Viettel mobile card"
        content={["Region: VN", "Discount: 4%"]}
      />
    </Screen>
  );
};
