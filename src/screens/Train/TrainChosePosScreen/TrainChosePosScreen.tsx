import { Divider } from "components/Divider";
import { Screen } from "components/Screen";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useWindowSize } from "react-use";
import { Paths } from "router/PrimaryRouters";
import { NoteSeat } from "screens/MovieTicket/MovieTicketChosePosDetailScreen";
import { TrainChosePosSideInfo } from "screens/Train/TrainChosePosScreen/TrainChosePosSideInfo";
import { TrainChosePosRenderSeat } from "./TrainChosePosRenderSeat";
import { AppButton } from "components";
import { screenSize } from "theme/metrics";

interface Props { }

const carriages = [0, 1, 2];

export const TrainChosePosScreen: React.FC<Props> = () => {
  const [selectedCarriage, setSelectedCarriage] = useState(0);
  const history = useHistory();
  const { width } = useWindowSize();

  const dividerOrientation = width > 500 ? "vertical" : "horizontal";
  return (
    <Screen className="px-12 md:pl-32 md:pr-0 flex text__grey flex flex-col md:flex-row">
      <div className="flex flex-1 mt-32 flex-col md:flex-row ">
        <div className="pr-12 ">
          <p className="mb-8">Carriage: </p>
          <div className="flex flex-row md:flex-col ml-2 mb-8 md:mb-0">
            {carriages.map(val => (
              <Carriage
                key={1}
                isActive={val === selectedCarriage}
                onClick={setSelectedCarriage}
                val={val}
              />
            ))}
          </div>
        </div>

        <Divider orientation={dividerOrientation} className="md:mr-8" />
        <div >
          <div className="mt-8 md:mt-0">
            <p className="mb-8">Seat position: </p>
            <TrainChosePosRenderSeat />
          </div>

          <div className="flex flex-1 flex-col md:flex-row my-4">
            <NoteSeat className="text-primary" text="Your chose" />
            <NoteSeat className="text-darkGrey" text="Empty seat" />
            <NoteSeat className="text-darkBlue" text="Was booked" />
          </div>

        </div>
      </div>
          {width < screenSize.md && (
            <div className="flex flex-1 flex-col px-6 items-center py-4">
              <p className="text-center py-4">1-B1,2-B2</p>
              <AppButton onClick={() => history.push(Paths.trainFillInfo)} fullWidth>Confirm</AppButton>
            </div>
          )
          }


      <TrainChosePosSideInfo
        onConfirm={() => history.push(Paths.trainFillInfo)}
      />
    </Screen>
  );
};

interface OwnProps {
  isActive?: boolean;
  onClick: (val: number) => void;
  val: number;
}

const Carriage: React.FC<OwnProps> = props => {
  const { val, onClick, isActive } = props;

  let clInactive = "";
  if (!isActive) {
    clInactive =
      " bg-white border border-blueGrey border-solid text-blueGrey opacity-50";
  }

  return (
    <button
      className={
        "py-4 mr-4 md:py-8 md:mb-4 color__white text-center bg__primary align-middle outline-none" +
        clInactive
      }
      onClick={() => onClick(val)}
      style={{
        width: "2.2rem",
        borderRadius: 8
      }}
    >
      {val + 1}
    </button>
  );
};
