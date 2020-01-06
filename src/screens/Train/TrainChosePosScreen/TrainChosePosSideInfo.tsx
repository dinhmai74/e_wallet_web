import { AppButton } from "components";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import React from "react";
import { TrainSideInfoBG } from "screens/Train/TrainGeneralScreen/TrainGeneralScreenSideInfo";
import { images } from "theme/images";
import { formatMoney } from "utils/number";

interface Props {
  onConfirm: () => void;
}

export const TrainChosePosSideInfo: React.FC<Props> = ({ onConfirm }) => {
  return (
    <TrainSideInfoBG className="w-2/6 hidden min-h-screen md:inline-block pt-16">
      <img src={`${process.env.PUBLIC_URL}/${images.home.train}`} alt="img" />

      <div className="pt-12 pl-12 pr-8">
        <p className="text__h2 color__blue-grey text-center pb-8">
          Train ticket- Round trip
        </p>
        <RowText leftTx="Time:" rightTx="7:00 - 14:00 (32h32)" />
        <RowText leftTx="Train:" rightTx="SE103" />
        <RowText leftTx="From:" rightTx="HCM" />
        <RowText leftTx="To:" rightTx="Đà Nẵng" />
        <RowText leftTx="Depart time:" rightTx="12/12/2019" />
        <RowText leftTx="Return time:" rightTx="20/12/2019" />
        <RowText leftTx="Total amount:" rightTx={formatMoney(700000)} />
        <RowText leftTx="Seat:" rightTx="selecting..." />
        <AppButton fullWidth className="my-4" onClick={onConfirm}>
          Buy
        </AppButton>
      </div>
    </TrainSideInfoBG>
  );
};

interface OwnProps {
  leftTx: string;
  rightTx: string;
}

const RowText: React.FC<OwnProps> = props => {
  return (
    <RowTextSpaceBetween
      {...props}
      leftClassName="text-blueGrey font-normal"
      rightClassName="text-grey"
      className="py-4"
    />
  );
};
