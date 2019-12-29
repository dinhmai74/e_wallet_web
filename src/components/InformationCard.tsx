import React from "react";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { Divider } from "@material-ui/core";
import { AppButton } from "components";
import { formatMoney } from "utils/number";
import { useCss } from "react-use";

interface Props {
  totalAmount: number;
  onSubmit: () => void;
}

export const InformationCard: React.FC<Props> = props => {
  const { children, totalAmount, onSubmit } = props;
  let cardCn = useCss({
    minWidth: "500px"
  });
  cardCn += " max-w-sm rounded overflow-hidden shadow-card   px-12 py-8";
  return (
    <div>

      <div className={cardCn}>
        {children}
        <Divider />

        <RowTextSpaceBetween
          leftTx="Total amount"
          leftClassName="text-blueGrey font-normal"
          className="my-4 mt-8"
          rightTx={formatMoney(totalAmount) + ""}
        />

        <AppButton onClick={onSubmit} fullWidth>
          <p style={{ fontSize: 14 }}>Confirm</p>
        </AppButton>
      </div>
    </div>
  );
};
