import src from "*.bmp";
import React from "react";
import { images } from "theme";

export interface IconProps {
  name?: string;
  src?: string;
  color?: string;
  size: number;
  className?: string;
}

export const AppIcon: React.FC<IconProps> = ({
  name,
  color,
  size,
  className
}) => {
  const source =
    src || process.env.PUBLIC_URL + "/asset/images/Icons/" + name + ".svg";

  const sizeImg = size && {
    width: size,
    height: size
  };
  return <img src={source} style={{ color, ...sizeImg }} />;
};
