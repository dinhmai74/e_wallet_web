import { PaymentScreen } from "components/PaymentScreen";
import React from "react";

export const BuyPhoneCardPayMent: React.FC = props => {
  return (
    <PaymentScreen
      titleProvider="viettel"
      price="100.000d"
      quantity="3"
      totalAmount={300000}
      navigateTo="/payment/buy-phone-card/success"
    />
  );
};
