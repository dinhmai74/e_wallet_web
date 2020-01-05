import { Screen } from "components";
import { ItemProvider } from "components/ItemProvider";
import React from "react";
import { images } from "theme";
import { IntroBuyGameCard } from "./component/IntroBuyGameCard";

export const BuyGameCardGeneral: React.FC = () => {
  return (
    <Screen className="px-0">
      <IntroBuyGameCard />
      <div
        className=" d-flex flex-wrap  px-10 py-10 mb-64  justify-center "
        style={{ backgroundColor: "#f2f5fa" }}
      >
        <p className="`text__h2 color__steel font-bold pl-16">
          Choose Provider:
        </p>
        <div className="flex flex-row  py-10 px-12 flex-wrap ">
          <ItemProvider src={images.gameCard.iconGarena} />
          <ItemProvider src={images.gameCard.iconGate} />
          <ItemProvider src={images.gameCard.iconZing} />
        </div>
      </div>
    </Screen>
  );
};
