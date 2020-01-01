import React from "react";
import { Avatar } from "@material-ui/core";

interface Props {
  name: string;
  size?: number | string;
  src: string;
  hideName?: boolean;
  onClick?: () => void;
  className?: string;
  // margin element
  m?: number;
}

export const AppAvatar: React.FC<Props> = props => {
  const { m, name, size, src, hideName, onClick, className } = props;
  return (
    <div className={`flex-column m-${m} items-center justify-center`}>
      <Avatar
        alt={name}
        src={src}
        onClick={onClick}
        className={"mx-auto " + className}
        style={{
          width: size,
          height: size
        }}
      />
      {!hideName && (
        <p className="text__d3 color__blue-grey text-center mt-4">{name}</p>
      )}
    </div>
  );
};

AppAvatar.defaultProps = {
  size: 70,
  hideName: false,
  onClick: () => {},
  m: 4
};
