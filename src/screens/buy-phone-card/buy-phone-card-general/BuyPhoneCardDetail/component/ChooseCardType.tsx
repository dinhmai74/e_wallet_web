import React, { useState } from "react";
import { ItemMoney } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ItemMoney";
import { TotalMoney } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/TotalMoney";
import { images } from "theme";
import { formatMoney } from "utils/number";

const data = [10000, 20000, 50000, 100000, 200000, 500000];

export interface Props {
  navigate?: string;
}

export const ChooseCardType: React.FC<Props> = ({ navigate }) => {
  const [selected, setSelected] = useState<number>(-1);
  const renderCardMoney = () => {
    return data.map((val, index) => (
      <ItemMoney
        title={formatMoney(val, 0)}
        key={index}
        onClick={() => {
          setSelected(val);
        }}
        isHighLight={selected===val}
        selected={selected}
      />
    ));
  };

  return (
    <div className="my-8">
      <div className="my-8">
        <div className="mb-12 pl-0 md:pl-64 ">
          <p className="text__h2 color__grey font-bold">Choose card type:</p>
        </div>
        <div className="md:flex md:flex-wrap justify-center ml-0 md:ml-32">
          {renderCardMoney()}
        </div>
      </div>

      <TotalMoney
        type="left"
        src={images.phoneCard.cash}
        quantity="Quantity: "
        total="Total: "
        navigateTo={navigate}
        buttonTx="OK"
        money={selected}
      />
    </div>
  );
};
