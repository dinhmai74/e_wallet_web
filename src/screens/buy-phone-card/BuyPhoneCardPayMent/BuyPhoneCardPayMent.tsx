import { Screen } from "components";
import { PaymentMethods } from "components/PaymentMethods";
import React from "react";
import { useBoolean } from "react-use";
import { InfoPaymentCard } from "screens/buy-phone-card/BuyPhoneCardPayMent/component/InfoPaymentCard";
import { images } from "theme";

export const BuyPhoneCardPayMent: React.FC = props => {
  const [, setSelectedPayment] = useBoolean(false);

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
