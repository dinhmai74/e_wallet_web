import React from "react";
import { Screen } from "components";
import { images } from "theme";
import { InfoPaymentCard } from "screens/buy-phone-card/BuyPhoneCardPayMent/component/InfoPaymentCard";
import { useParams } from "react-router";
interface Props {
  location?: string;
}

export const BuyPhoneCardPayMent: React.FC = props => {
  return (
    <Screen>
      {/* <MethodCard src={images.phoneCardPayment.vcb} /> */}
      <InfoPaymentCard
        type="left"
        src={images.phoneCard.cash}
        navigateTo="buy-phone-card-payment"
        buttonTx="Confirm"
        provider="viettel"
        price={"100.000"}
        quantity="3"
        totalAmount="300.000d"
      />
    </Screen>
  );
};
