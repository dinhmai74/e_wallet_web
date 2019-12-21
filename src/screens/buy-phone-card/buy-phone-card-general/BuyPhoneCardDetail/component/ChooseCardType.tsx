import React, { useState } from "react";
import { ItemMoney } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/ItemMoney";
import { TotalMoney } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail/component/TotalMoney";
import { images } from "theme";

const data = [[100000], [200000], [500000], [100000], [200000], [500000]];

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    const i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    const j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      // @ts-ignore
      (decimalCount
        ? decimal +
          // @ts-ignore
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
}

export const ChooseCardType: React.FC = () => {
  const renderCardMoney = () => {
    return data.map((val, index) => (
      <ItemMoney
        title={formatMoney(val, 0)}
        key={index}
      />
    ));
  };

  return (
    <div>
      <div className="mb-20 pl-64 flex-wrap">
        <p
          className="text__h2 color__grey font-bold"
          style={{ paddingLeft: 15 }}
        >
          Choose card type:
        </p>
      </div>
      <div className="flex flex-wrap justify-center mb-10 ml-32">
        {renderCardMoney()}
      </div>
      <TotalMoney
        type="left"
        src={images.phoneCard.cash}
        quantity="Quantity: "
        total="Total: "
        navigateTo=""
        buttonTx="OK"
      />
    </div>
  );
};
