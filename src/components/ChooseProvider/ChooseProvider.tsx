import React from "react";
import { images } from "theme";
import { ItemProvider } from "components/ItemProvider/ItemProvider";

export const ChooseProvider: React.FC = () => {
  return (
    <div
      className=" d-flex flex-wrap  px-10 py-10 mb-64  justify-center "
      style={{ backgroundColor: "#f2f5fa" }}
    >
      <p className="`text__h2 color__steel font-bold pl-16">Choose Provider:</p>
      <div className="flex flex-row  py-10 px-12 flex-wrap ">
       <ItemProvider src={images.iconProvider.viettel}/>
       <ItemProvider src={images.iconProvider.viettel}/>
       <ItemProvider src={images.iconProvider.viettel}/>
      </div>
    </div>
  );
};
