import cx from "classnames";
import React from "react";

export interface RowTextSpaceBetweenProps {
  leftTx: string;
  rightTx: string;
  rightClassName?: string;
  leftClassName?: string;
  className?: string;
}

export const RowTextSpaceBetween: React.FC<RowTextSpaceBetweenProps> = props => {
  const { leftTx, rightTx, leftClassName, rightClassName, className } = props;
  return (
    <div className={"flex flex-row justify-between " + className}>
      <p className={"color__steel font__medium mx-2 " + leftClassName}>
        {leftTx}
      </p>
      <p className={cx("color__steel self-end mx-2 ", rightClassName)}>
        {rightTx}
      </p>
    </div>
  );
};
