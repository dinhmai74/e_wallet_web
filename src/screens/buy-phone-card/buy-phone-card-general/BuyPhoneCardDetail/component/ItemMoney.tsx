import React from "react";
import { AppCardContent, AppCard } from "components";
import { ButtonBase } from "@material-ui/core";

interface Props {
  title?: any;
  onClick?: () => void;
}
export const ItemMoney: React.FC<Props> = props => {
  const { title, onClick } = props;
  return (
    <AppCard className="mr-32 items-center justify-center px-8 py-4 mb-20">
      <ButtonBase onClick={onClick}>
        <AppCardContent>
          <p className="text__h1 color__grey pb-4 font-bold">{title}</p>
          <p className="pl-2 text__d1 color__blue-grey ">Cashback: 200d</p>
        </AppCardContent>
      </ButtonBase>
    </AppCard>
  );
};
