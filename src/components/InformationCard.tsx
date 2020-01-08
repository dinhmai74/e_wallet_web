import { AppButton } from "components";
import { Divider } from "components/Divider";
import { FeeRow } from "components/FeeRow";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import React from "react";
import { useCss } from "react-use";
import { formatMoney, unitTx } from "utils/number";

interface Props {
  totalAmount: number;
  onSubmit: () => void;
  disabledButton: boolean;
  buttonTx: string;
}

export const InformationCard: React.FC<Props> = props => {
  const { children, totalAmount, onSubmit, disabledButton, buttonTx } = props;

  let cardCn = useCss({
    "@media only screen and (min-width: 728px)": {
      minWidth: "500px"
    },

    "@media (max-width: 728px)": {
      minWidth: "300px"
    }
  });

  cardCn += " max-w-xs  rounded overflow-hidden shadow-card px-4 md:px-12 py-8";

  return (
    <div>
      <div className={cardCn}>
        {children}
        <FeeRow className="my-8" />
        <Divider />

        <RowTextSpaceBetween
          leftTx="Total amount"
          leftClassName="text-blueGrey font-medium"
          className="my-4 mt-8 mb-8 font-medium"
          rightTx={formatMoney(totalAmount) + unitTx}
        />

        <AppButton onClick={onSubmit} fullWidth disabled={disabledButton}>
          <p style={{ fontSize: 14 }}>{buttonTx}</p>
        </AppButton>
      </div>
    </div>
  );
};
