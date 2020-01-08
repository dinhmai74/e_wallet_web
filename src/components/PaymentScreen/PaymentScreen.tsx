import { Screen } from "components";
import { PaymentMethods } from "components/PaymentMethods";
import React from "react";
import { useBoolean } from "react-use";
import { InfoPaymentCard } from "screens/buy-phone-card/BuyPhoneCardPayMent/component/InfoPaymentCard";
import { images } from "theme";

export interface Props {
  titleProvider: string;
  price: string;
  quantity: string;
  totalAmount: number;
  navigateTo: string;
}

export const PaymentScreen: React.FC<Props> = ({
  titleProvider,
  price,
  quantity,
  totalAmount,
  navigateTo
}) => {
  const [selectedPayment, setSelectedPayment] = useBoolean(false);

  const onChangeMethods = () => {
    setSelectedPayment(true);
  };

  return (
    <Screen>
      <div className="mt-16">
        <PaymentMethods onChange={onChangeMethods} />
        <InfoPaymentCard
          type="left"
          src={images.phoneCardPayment.payment}
          navigateTo={navigateTo}
          buttonTx="Confirm"
          provider={titleProvider}
          price={price}
          quantity={quantity}
          isSelectedPayment={selectedPayment}
          totalAmount={totalAmount}
        />
      </div>
    </Screen>
  );
};
