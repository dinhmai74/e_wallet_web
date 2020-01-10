import { SuccessScreen } from "components/SuccessScreen";
import React from "react";
import { images } from "theme/images";

interface Props {}

export const BuyPhoneCardSuccess: React.FC<Props> = props => {
  return <SuccessScreen urlImage={images.iconProvider.viettel} />;
};
