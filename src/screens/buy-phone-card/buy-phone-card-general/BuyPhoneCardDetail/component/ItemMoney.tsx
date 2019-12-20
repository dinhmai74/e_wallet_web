import React from "react";
import { AppCardContent, AppCard } from "components";

interface Props {
  title?: any;
}
export const ItemMoney: React.FC<Props> = props => {
  const { title } = props;
  return (
    <AppCard className="mr-20 items-center justify-center px-5 py-4 mb-20">
      <AppCardContent>
        <p className="text__h1 color__grey pb-4 font-bold">{title}</p>
        <p className="pl-3 text__d1 color__blue-grey ">Cashback: 200d</p>
      </AppCardContent>
    </AppCard>
  );
};
