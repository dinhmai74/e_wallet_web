import { Screen } from "components";
import { observer } from "mobx-react";
import React from "react";
import { EventSeat } from "@material-ui/icons";

import { MovieTicketChosePosDetailScreenSideInfo } from "./MovieTicketChosePosDetailScreen.SideInfo";
import { ImgScreen } from "theme";
import { RenderSeats } from "screens/MovieTicket/MovieTicketChosePosDetailScreen/components/RenderSeats";

export const MovieTicketChosePosDetailScreen: React.FC = observer(() => {
  return (
    <Screen className="ml-32 flex">
      <div className="flex flex-1 mt-32 flex-col pr-16">
        <div>
          <ImgScreen width={500} />
          <p className="color__blue-grey  my-8 mt-4 ml-56">Screen</p>
        </div>

        <RenderSeats />

        <div className="my-8 flex flex-row">
          <div className="flex flex-1 flex-col">
            <NoteSeat className="text-primary" text="Chosing seat" />
            <NoteSeat className="text-darkGrey" text="Empty seat" />
          </div>

          <div className="flex flex-1 flex-col">
            <NoteSeat className="text-orangeYellow" text="Empty vip seat" />
            <NoteSeat className="text-darkBlue" text="Was booked" />
          </div>
        </div>
      </div>
      <MovieTicketChosePosDetailScreenSideInfo />
    </Screen>
  );
});

export const NoteSeat: React.FC<any> = ({ text, className }) => {
  return (
    <div className="flex flex-row p-4">
      <EventSeat className={className + " mr-4"} />
      <p>{text}</p>
    </div>
  );
};
