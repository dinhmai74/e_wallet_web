import { Screen } from "components/Screen";
import React from "react";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { TrainChosePosSideInfo } from "screens/Train/TrainChosePosScreen/TrainChosePosSideInfo";
import { TrainFillInfoPassenger } from "screens/Train/TrainFillInfoScreen/TrainFillInfoPassenger";
import { TrainFillInfoReseller } from "./TrainFillInfoReseller";

interface Props {}

export const TrainFillInfoScreen: React.FC<Props> = () => {
  const history = useHistory();

  return (
    <Screen className="flex text__grey flex-row">
      <div className="flex flex-1 flex-col pt-32 ml-32 ">
        <TrainFillInfoPassenger />
        <TrainFillInfoReseller />
      </div>

      <TrainChosePosSideInfo
        onConfirm={() => history.push(Paths.trainPayment)}
      />
    </Screen>
  );
};
