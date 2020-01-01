import React from "react";
import { Screen } from "components";
import { images } from "theme";
import { InfoPaymentCard } from "screens/buy-phone-card/BuyPhoneCardPayMent/component/InfoPaymentCard";
import { useParams } from "react-router";
import { PaymentMethods } from "components/PaymentMethods";
import { useBoolean } from "react-use";

export const BuyPhoneCardPayMent: React.FC = props => {
  const [isSelectedPayment, setSelectedPayment] = useBoolean(false);

  const onChangeMethods = () => {
    setSelectedPayment(true);
  };

  return (
    <Screen>
      <PaymentMethods onChange={onChangeMethods} />
      <InfoPaymentCard
        type="left"
        src={images.phoneCardPayment.payment}
        navigateTo="/payment/buy-phone-card/success"
        buttonTx="Confirm"
        provider="viettel"
        price={"100.000"}
        quantity="3"
        totalAmount="300.000d"
      />
    </Screen>
  );
};
