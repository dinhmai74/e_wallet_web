import { PaymentScreen } from "components/PaymentScreen";
import React from "react";

export const BuyGameCardPayment: React.FC = props => {
  return (
    <PaymentScreen
      titleProvider="Garena"
      price="100.000d"
      quantity="3"
      totalAmount={300000}
      navigateTo="/payment/buy-game-card/success"
    />
  );
};
