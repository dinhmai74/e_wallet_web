import React from "react";
import { AppCardContent } from "components";
import { ButtonBase } from "@material-ui/core";

interface Props {
  title?: any;
  onClick?: () => void;
}
export const ItemMoney: React.FC<Props> = props => {
  const { title, onClick } = props;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md px-12 py-4 mb-20 cursor-pointer mr-20">
      <ButtonBase onClick={onClick}>
        <AppCardContent>
          <p className=" text__h1 color__grey pb-4 font-bold">{title}</p>
          <p className=" text__d1 color__blue-grey ">Cashback: 200d</p>
        </AppCardContent>
      </ButtonBase>
    </div>
  );
};
