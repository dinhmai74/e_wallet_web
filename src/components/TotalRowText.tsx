import React from "react";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { formatMoney } from "utils/number";

interface Props {
  value: number;
  className?: string;
}

export const TotalRowText: React.FC<Props> = props => {
  const { value, className } = props;
  return (
    <RowTextSpaceBetween
      leftTx={"Total:"}
      rightTx={formatMoney(value) + "d"}
      rightClassName="text-primary"
      className={className}
    />
  );
};
