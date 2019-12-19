import React from "react";

interface Props {
  className: string;
  height?: number | string;
  children?: any;
}

export const Wallpaper: React.FC<Props> = ({ className, height, children }) => {
  return (
    <div
      className={`z-0 absolute inset-x-0 bottom-0 ${className} `}
      style={{ height }}
    >
      {children}
    </div>
  );
};
