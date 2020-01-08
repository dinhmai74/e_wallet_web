import React from "react";
import { PaymentScreen } from "components/PaymentScreen";

export const BuyPhoneCardPayMent: React.FC = props => {
  return (
    <PaymentScreen
      titleProvider="viettel"
      price="100.000"
      quantity="3"
      totalAmount="300.000d"
      navigateTo="/payment/buy-phone-card/success"
    />
  );
};
