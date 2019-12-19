import React from "react";
import { IntroBuyPhoneCard } from "screens/buy-phone-card/buy-phone-card-general/buy-phone-card-general/component/IntroBuyPhoneCard";
import { Screen } from "components";
import { ChooseProvider } from "components/ChooseProvider";

export const BuyPhoneCardGeneral: React.FC = () => {
  return (
    <Screen className="px-0">
      <IntroBuyPhoneCard />
      <ChooseProvider />
    </Screen>
  );
};
