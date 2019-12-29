import { Screen } from "components";
import { PaymentMethods } from "components/PaymentMethods";
import { observer } from "mobx-react";
import React from "react";
import { ImgPayment } from "theme/images";
import { PaymentInfoCard } from "../components/PaymentInfoCard";

interface Props {}

export const MovieTicketPaymentScreen: React.FC<Props> = observer(props => {
  return (
    <Screen>
      <p className="text__h1 my-4 mb-12 color__grey">Simple payment</p>

      <PaymentMethods />

      <div className="flex flex-row my-8 justify-center px-16 xl:px-0">
        <ImgPayment
          width={500}
          className="hidden lg:block mr-48"
          style={{ minWidth: 500 }}
        />

        <p className="text__h3 color__steel mb-4">Information</p>

        <PaymentInfoCard />
      </div>
    </Screen>
  );
});
