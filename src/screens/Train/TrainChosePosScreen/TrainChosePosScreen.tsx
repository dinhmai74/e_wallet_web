import { Screen } from "components/Screen";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { NoteSeat } from "screens/MovieTicket/MovieTicketChosePosDetailScreen";
import { TrainChosePosSideInfo } from "screens/Train/TrainChosePosScreen/TrainChosePosSideInfo";
import { TrainChosePosRenderSeat } from "./TrainChosePosRenderSeat";

interface Props {}

const carriages = [0, 1, 2];

export const TrainChosePosScreen: React.FC<Props> = () => {
  const [selectedCarriage, setSelectedCarriage] = useState(0);
  const history = useHistory();

  return (
    <Screen className="ml-32 flex text__grey">
      <div className="flex flex-1 mt-32 flex-row ">
        <div className="pr-12 ">
          <p className="mb-8">Carriage: </p>
          <div className="flex flex-col ml-2">
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

        <div>
          <div
            className="border-blueGrey px-12"
            style={{
              borderLeft: "1px solid"
            }}
          >
            <p className="mb-8">Seat position: </p>
            <TrainChosePosRenderSeat />
          </div>

          <div className="flex flex-1 flex-row ml-8 my-4">
            <NoteSeat className="text-primary" text="Your chose" />
            <NoteSeat className="text-darkGrey" text="Empty seat" />
            <NoteSeat className="text-darkBlue" text="Was booked" />
          </div>
        </div>
      </div>
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
        "py-8 mb-4 color__white text-center bg__primary align-middle outline-none" +
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
