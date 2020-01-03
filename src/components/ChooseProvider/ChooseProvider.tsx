import { ItemProvider } from "components/ItemProvider/ItemProvider";
import React from "react";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { images } from "theme";

export const ChooseProvider: React.FC = () => {
  const history = useHistory();
  return (
    <div
      className=" d-flex flex-wrap  px-10 py-10 mb-64  justify-center "
      style={{ backgroundColor: "#f2f5fa" }}
    >
      <p className="`text__h2 color__steel font-bold pl-16">Choose Provider:</p>
      <div className="flex flex-row  py-10 px-12 flex-wrap ">
        <ItemProvider
          src={images.iconProvider.viettel}
          onClick={() => {
            history.push(Paths.buyPhoneCardDetail);
          }}
        />
        <ItemProvider
          src={images.iconProvider.mobiphone}
          onClick={() => {
            history.push(Paths.buyPhoneCardDetail);
          }}
        />
        <ItemProvider
          src={images.iconProvider.vtc}
          onClick={() => {
            history.push(Paths.buyPhoneCardDetail);
          }}
        />
      </div>
    </div>
  );
};
