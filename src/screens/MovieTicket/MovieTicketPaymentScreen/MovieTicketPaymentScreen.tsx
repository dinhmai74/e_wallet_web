import { Screen } from "components";
import { PaymentMethods } from "components/PaymentMethods";
import { observer } from "mobx-react";
import React from "react";
import { useHistory } from "react-router";
import { useBoolean } from "react-use";
import { Paths } from "router/PrimaryRouters";
import { ImgPayment } from "theme/images";
import { PaymentInfoCard } from "../components/PaymentInfoCard";

interface Props {}

export const MovieTicketPaymentScreen: React.FC<Props> = observer(props => {
  const [isSelectedPayment, setSelectedPayment] = useBoolean(false);
  const history = useHistory();

  const onChangeMethods = () => {
    setSelectedPayment(true);
  };

  return (
    <Screen>
      <p className="text__h1 my-4 mb-12 color__grey">Simple payment</p>

      <PaymentMethods onChange={onChangeMethods} />

      <div className="flex flex-row my-8 justify-center px-16 xl:px-0">
        <ImgPayment
          width={500}
          className="hidden lg:block mr-40"
          style={{ minWidth: 500 }}
        />

        <div className="flex flex-col">
          <p className="text__h3 color__steel mb-4">Information</p>
          <PaymentInfoCard
            buttonTx="Confirm"
            isSelectedPayment={isSelectedPayment}
            onSubmit={() => history.push(Paths.movieTicketPaymentSuccess)}
          />
        </div>
      </div>
    </Screen>
  );
});
