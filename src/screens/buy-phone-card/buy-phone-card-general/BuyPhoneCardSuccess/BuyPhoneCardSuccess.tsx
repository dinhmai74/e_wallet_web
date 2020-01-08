import React from "react";
import { images } from "theme/images";
import { SuccessScreen } from "components/SuccessScreen";

interface Props {}

export const BuyPhoneCardSuccess: React.FC<Props> = props => {
  return (
    <SuccessScreen urlImage={images.iconProvider.viettel} />
  );
};
