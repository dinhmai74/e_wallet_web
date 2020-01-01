import React from "react";
import {
  RowTextSpaceBetween,
  RowTextSpaceBetweenProps
} from "components/RowTextSpaceBetween";
import { formatMoney, unitTx } from "utils/number";

interface Props {
  className?: string;
  [rest: string]: any;
}

export const FeeRow: React.FC<Props> = props => {
  const { className, ...rest } = props;
  return (
    <RowTextSpaceBetween
      leftTx="Free:"
      leftClassName="text-blueGrey font-medium"
      rightTx={formatMoney(0) + unitTx}
      rightClassName="font-medium"
      className={className}
      {...rest}
    />
  );
};
