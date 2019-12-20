import React from "react";
import { Avatar } from "@material-ui/core";

interface Props {
  src: string;
  name: string;
}

export const CastAvatar: React.FC<Props> = props => {
  const { name } = props;
  // not real data so we rando img
  const id = Math.floor(Math.random() * 1000) + 1;
  const size = 70;

  return (
    <div className="flex-column m-4 items-center justify-center">
      <Avatar
        alt={name}
        src={`https://picsum.photos/id/${id}/200/300`}
        className="mx-auto"
        style={{
          width: size,
          height: size,
          alignSelf: "center"
        }}
      />
      <p className="text__d3 color__blue-grey text-center mt-4">{name}</p>
    </div>
  );
};

CastAvatar.defaultProps = {};
