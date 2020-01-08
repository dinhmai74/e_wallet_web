import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ItemProvider } from "components/ItemProvider/ItemProvider";
import _ from "lodash";
import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { images } from "theme";

const ProviderImgs: string[] = [
  images.iconProvider.mobiphone,
  images.iconProvider.viettel,
  images.iconProvider.vnpt
];

const GenerateData = () => {
  const history = useHistory();
  return _.shuffle(ProviderImgs).map(el => {
    return (
      <ItemProvider
        src={el}
        key={el}
        onClick={() => {
          history.push(Paths.buyPhoneCardDetail);
        }}
      />
    );
  });
};

export const ChooseProvider: React.FC = () => {
  const data = GenerateData();
  return (
    <div
      className=" d-flex flex-wrap  px-10 py-10 mb-64  justify-center "
      style={{ backgroundColor: "#f2f5fa" }}
    >
      <p className="`text__h2 color__steel font-bold pl-16">Choose Provider:</p>
      <ScrollMenu
        alignCenter={false}
        data={data}
        arrowLeft={<ArrowBackIos />}
        arrowRight={<ArrowForwardIos />}
      />
    </div>
  );
};
