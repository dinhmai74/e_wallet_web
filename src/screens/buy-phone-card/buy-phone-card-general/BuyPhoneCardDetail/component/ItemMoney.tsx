import { AppCard } from "components";
import React from "react";

interface Props {
  title?: any;
  onClick?: () => void;
}
export const ItemMoney: React.FC<Props> = props => {
  const { title, onClick } = props;
  return (
    <AppCard
      className="max-w-sm p-8 text-center my-4 mx-8 cursor-pointer"
      style={{
        width: 250
      }}
      onClick={onClick}
    >
      <div className="m-auto">
        <p className=" text__h1 color__grey pb-4 font-bold">{title}</p>
        <p className=" text__d1 color__blue-grey ">Cashback: 200d</p>
      </div>
    </AppCard>
  );
};
