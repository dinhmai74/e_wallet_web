import React from "react";

export interface AppCardProps {
  className?: string;
  [rest: string]: any;
}

export const AppCard: React.FC<AppCardProps> = props => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={` rounded overflow-hidden shadow-card    ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
