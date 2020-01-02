import React from "react";
import { Screen } from "components";
import { IntroBuyGameCard } from "./component/IntroBuyGameCard";
import { ItemProvider } from "components/ItemProvider";
import { images } from "theme";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";

export const BuyGameCardGeneral: React.FC = () => {
  const history = useHistory();
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
          <ItemProvider
            src={images.gameCard.iconGarena}
            onClick={() => {
              history.push(Paths.buyGameCardDetail);
            }}
          />
          <ItemProvider
            src={images.gameCard.iconGate}
            onClick={() => {
              history.push(Paths.buyGameCardDetail);
            }}
          />
          <ItemProvider
            src={images.gameCard.iconZing}
            onClick={() => {
              history.push(Paths.buyGameCardDetail);
            }}
          />
        </div>
      </div>
    </Screen>
  );
};
