import React from "react";
import { SuccessScreen } from "components/SuccessScreen";
import { images } from "theme";

interface Props {}

export const BuyGameCarSuccess: React.FC<Props> = props => {
  return (
    <SuccessScreen urlImage={images.gameCard.iconGarena} />
  );
};
