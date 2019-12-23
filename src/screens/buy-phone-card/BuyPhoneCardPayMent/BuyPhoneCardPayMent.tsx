import React from "react";
import { Screen } from "components";
import { images } from "theme";
import { InfoPaymentCard } from "screens/buy-phone-card/BuyPhoneCardPayMent/component/InfoPaymentCard";

export const BuyPhoneCardPayMent: React.FC = () => {
  return (
    <Screen>
      {/* <MethodCard src={images.phoneCardPayment.vcb} /> */}
      <InfoPaymentCard
        type="left"
        src={images.phoneCard.cash}
        navigateTo="buy-phone-card-payment"
        buttonTx="OK"
        provider="viettel"
        price="10,000d"
        quantity="3"
      />
    </Screen>
  );
};
