import { AppAvatar } from "components/AppAvatar";
import React from "react";

interface Props {
  src: string;
  name: string;
}

export const CastAvatar: React.FC<Props> = props => {
  const { name } = props;
  // not real data so we rando img
  const id = Math.floor(Math.random() * 1000) + 1;

  return (
    <AppAvatar src={`https://picsum.photos/id/${id}/200/300`} name={name} />
  );
};

CastAvatar.defaultProps = {};
