import { AppButton } from "components";
import { Screen } from "components/Screen";
import React from "react";
import { useHistory } from "react-router";
import { useWindowSize } from "react-use";
import { Paths } from "router/PrimaryRouters";
import { TrainChosePosSideInfo } from "screens/Train/TrainChosePosScreen/TrainChosePosSideInfo";
import { TrainFillInfoPassenger } from "screens/Train/TrainFillInfoScreen/TrainFillInfoPassenger";
import { screenSize } from "theme/metrics";
import { TrainFillInfoReseller } from "./TrainFillInfoReseller";

interface Props {}

export const TrainFillInfoScreen: React.FC<Props> = () => {
  const history = useHistory();
  const { width } = useWindowSize();

  const navigate = () => {
    history.push(Paths.trainPayment);
  };

  return (
    <Screen className="flex text__grey flex-row" haveFooter>
      <div className="flex flex-1 flex-col pt-32 px-12 md:pl-32 md:px-0">
        <TrainFillInfoPassenger />
        <TrainFillInfoReseller />
        {width < screenSize.md && (
          <AppButton onClick={navigate} fullWidth>
            Confirm
          </AppButton>
        )}
      </div>

      <TrainChosePosSideInfo onConfirm={navigate} />
    </Screen>
  );
};
