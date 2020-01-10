import React from "react";

export type HoverType= "zoomIn" | "zoomIn3D"

export interface AppCardProps {
  className?: string;
  hoverEffect?: HoverType;
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
