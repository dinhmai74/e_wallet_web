import { InformationCard } from "components/InformationCard";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import React from "react";
import { TransferFormValue } from "screens/Transfer/TransferGeneralScreen";
import { formatMoney } from "utils/number";

interface Props {
  paymentInfo: TransferFormValue;
  isSelectedPayment: boolean;
  onSubmit: () => void;
  buttonTx: string;
}

export const TransferPaymentInfoCard: React.FC<Props> = props => {
  const { paymentInfo, isSelectedPayment, onSubmit, buttonTx } = props;
  if (!paymentInfo) {
    return null;
  }
  const { amount, name, phone } = paymentInfo;
  return (
    <InformationCard
      totalAmount={Number(amount)}
      onSubmit={onSubmit}
      disabledButton={!isSelectedPayment}
      buttonTx={buttonTx}
    >
      <RowTextSpaceBetween
        leftTx="You transfer:"
        leftClassName="text-blueGrey font-normal"
        rightTx={formatMoney(300000)}
        className="mb-8"
      />
      <RowTextSpaceBetween
        leftTx="To:"
        leftClassName="text-blueGrey font-normal"
        rightTx={name}
        className="my-8"
      />
      <RowTextSpaceBetween
        leftTx="Phone number:"
        leftClassName="text-blueGrey font-normal"
        rightTx={phone}
        className="my-8"
      />
    </InformationCard>
  );
};
