import { EventSeat } from "@material-ui/icons";
import { AppButton, Screen } from "components";
import _ from "lodash";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useWindowSize } from "react-use";
import { Paths } from "router/PrimaryRouters";
import { RenderSeats } from "screens/MovieTicket/MovieTicketChosePosDetailScreen/components/RenderSeats";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { ImgScreen } from "theme";
import { screenSize } from "theme/metrics";
import { MovieTicketChosePosDetailScreenSideInfo } from "./MovieTicketChosePosDetailScreen.SideInfo";

export const MovieTicketChosePosDetailScreen: React.FC = observer(() => {
  const store = useContext(MovieTicketStoreContext);

  let seatsTx = "";
  const { seatPos } = store;

  _.forEach(toJS(seatPos), (val, k) => {
    seatsTx += val;
    seatsTx += ", ";
  });
  const { width } = useWindowSize();

  seatsTx = seatsTx.slice(0, -2);

  const history = useHistory();
  const navigate = () => history.push(Paths.movieTicketPayment);

  return (
    <Screen className="md:pl-32 px-4 md:px-0 flex">
      <div className="flex flex-1 mt-32 flex-col md:pr-16">
        <div>
          <ImgScreen width={500} className="hidden md:block" />
          <p className="color__blue-grey  my-8 mt-4 md:ml-56 ml-48">Screen</p>
        </div>

        <RenderSeats />

        <div className="my-8 mx-2 flex flex-row">
          <div className="flex flex-1 flex-col">
            <NoteSeat className="text-primary" text="Chosing seat" />
            <NoteSeat className="text-darkGrey" text="Empty seat" />
          </div>

          <div className="flex flex-1 flex-col">
            <NoteSeat className="text-orangeYellow" text="Empty vip seat" />
            <NoteSeat className="text-darkBlue" text="Was booked" />
          </div>
        </div>

        {width < screenSize.md && (
          <div className="flex items-center flex-col">
            <p className="text-center pb-8">{seatsTx}</p>
            <AppButton disabled={!seatsTx} onClick={navigate} fullWidth>
              Confirm
            </AppButton>
          </div>
        )}
      </div>
      <MovieTicketChosePosDetailScreenSideInfo />
    </Screen>
  );
});

export const NoteSeat: React.FC<any> = ({ text, className }) => {
  return (
    <div className="flex flex-row md:p-4 p-2">
      <EventSeat className={className + " md:mr-4 mr-2"} />
      <p>{text}</p>
    </div>
  );
};
