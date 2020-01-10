import { PaymentScreen } from "components/PaymentScreen";
import React from "react";
import { Paths } from "router/PrimaryRouters";

export const BuyGameCardPayment: React.FC = props => {
  return (
    <PaymentScreen
      titleProvider="Garena"
      price="100.000d"
      quantity="3"
      totalAmount={300000}
      navigateTo={Paths.buyGameCardSuccess}
    />
  );
};
