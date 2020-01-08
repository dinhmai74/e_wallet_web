import { Screen } from "components";
import { PaymentMethods } from "components/PaymentMethods";
import React from "react";
import { useBoolean } from "react-use";
import { InfoPaymentCard } from "screens/buy-phone-card/BuyPhoneCardPayMent/component/InfoPaymentCard";
import { images } from "theme";

export interface Props {
  titleProvider?: string;
  price?: string;
  quantity?: string;
  totalAmount?: string;
}

export const PaymentScreen: React.FC<Props> = ({
  titleProvider,
  price,
  quantity,
  totalAmount
}) => {
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
        provider={titleProvider}
        price={price}
        quantity={quantity}
        totalAmount={totalAmount}
      />
    </Screen>
  );
};
