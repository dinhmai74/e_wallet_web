import React from "react";
import cx from "classnames";

interface Props {
  leftTx: string;
  rightTx: string;
  rightClassName?: string;
  leftClassName?: string;
  className?: string;
}

export const RowTextSpaceBetween: React.FC<Props> = props => {
  const { leftTx, rightTx, leftClassName, rightClassName, className } = props;
  return (
    <div className={"flex flex-row justify-between " + className}>
      <p className={"color__steel font__bold mx-2 " + leftClassName}>
        {leftTx}
      </p>
      <p className={cx("color__steel self-end mx-2 ", rightClassName)}>
        {rightTx}
      </p>
    </div>
  );
};
