import React from "react";
import { ButtonProps } from "@material-ui/core";

interface Props extends ButtonProps {
  className: string;
  [rest: string]: any;
}

export const RoundedButton: React.FC<Props> = props => {
  const { children, className, onClick, ...rest } = props;
  return (
    <button
      className={`bg__white hover:bg-gray p-2 rounded-full items-center a-shadow ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
