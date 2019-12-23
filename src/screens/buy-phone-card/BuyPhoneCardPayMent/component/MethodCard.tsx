import React from "react";
import { images } from "theme";

export interface Props {
  src?: string;
}

export const MethodCard: React.FC<Props> = props => {
  const { src } = props;
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md px-24 py-4 mb-32 cursor-pointer  ">
      <img className="" src={src} alt="Sunset in the mountains" />
    </div>
  );
};
