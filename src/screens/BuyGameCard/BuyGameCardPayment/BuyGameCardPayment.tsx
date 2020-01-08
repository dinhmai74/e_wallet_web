import React from "react";
import { PaymentScreen } from "components/PaymentScreen";

export const BuyGameCardPayment: React.FC = props => {
  return (
    <PaymentScreen
      titleProvider="Garena"
      price="100.000"
      quantity="3"
      totalAmount="300.000d"
      navigateTo="/payment/buy-game-card/success"
    />
  );
};
