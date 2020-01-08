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
      className="max-w-sm px-6 py-4 pt-8 mb-20 cursor-pointer mr-20 outline-none items-center text-center justify-center align-middle"
      style={{
        height: 150,
        width: 250
      }}
      onClick={onClick}
    >
      <p className=" text__h1 color__grey pb-4 font-bold">{title}</p>
      <p className=" text__d1 color__blue-grey ">Cashback: 200d</p>
    </AppCard>
  );
};
