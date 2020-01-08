import React, { useState } from "react";
import { ItemMoney } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ItemMoney";
import { TotalMoney } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/TotalMoney";
import { images } from "theme";
import { formatMoney } from "utils/number";

const data = [10000, 20000, 50000, 100000, 200000, 500000];

export const ChooseCardType: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const renderCardMoney = () => {
    return data.map((val, index) => (
      <ItemMoney
        title={formatMoney(val, 0)}
        key={index}
        onClick={() => {
          setSelected(val);
        }}
      />
    ));
  };

  return (
    <div>
      <div className="mb-20 pl-56 flex-wrap">
        <p className="text__h2 color__grey font-bold">Choose card type:</p>
      </div>
      <div className="flex flex-wrap justify-center mb-10 ml-32">
        {renderCardMoney()}
      </div>
      <TotalMoney
        type="left"
        src={images.phoneCard.cash}
        quantity="Quantity: "
        total="Total: "
        navigateTo="buy-phone-card-payment"
        buttonTx="OK"
        money={selected}
      />
    </div>
  );
};
