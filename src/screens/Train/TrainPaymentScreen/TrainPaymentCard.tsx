import { EventNote } from "@material-ui/icons";
import { Divider } from "components/Divider";
import { InformationCard } from "components/InformationCard";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import React from "react";
import colors from "theme/color/_colors.scss";
import { formatMoney, unitTx } from "utils/number";

interface Props {
  onSubmit: () => void;
  buttonTx: string;
  isSelectedPayment: boolean;
}

export const TrainPaymentInfoCard: React.FC<Props> = props => {
  const { onSubmit, isSelectedPayment, buttonTx } = props;
  return (
    <InformationCard
      totalAmount={Number(1200000 * 2)}
      onSubmit={onSubmit}
      disabledButton={!isSelectedPayment}
      buttonTx={buttonTx}
    >
      <div className="flex flex-row mb-8 items-center">
        <EventNote
          style={{
            color: colors.blueGrey
          }}
        />
        <p className="align-middle px-2">17:00- 11/11/2019</p>
      </div>
      Train: SE111
      <Divider className="my-8" />
      <div className="color__grey">
        <RowTextSpaceBetween
          leftTx="SeatB11-Carriage 1"
          className="mb-8"
          leftClassName="color__blue-grey"
          rightTx={formatMoney(1200000) + unitTx}
        />
        <RowTextSpaceBetween
          leftTx="SeatB11-Carriage 2"
          leftClassName="color__blue-grey"
          rightTx={formatMoney(1200000) + unitTx}
        />
      </div>
    </InformationCard>
  );
};
