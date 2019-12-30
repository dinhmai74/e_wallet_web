import { Screen } from "components";
import _ from "lodash";
import { observer } from "mobx-react";
import { MovieTicketPriceData } from "mock-data/home/movies";
import React from "react";
import { MovieTicketChosePosScreenSideInfo } from "screens/MovieTicket/MovieTicketChosePosScreen/MovieTicketChosePosScreen.SideInfo";
import { MovieTicketChosePosTicketCard } from "./components/MovieTicketChosePos.TicketCard";

interface Props {}

export const MovieTicketChosePosScreen: React.FC<Props> = observer(props => {
  return (
    <Screen className="pl-24">
      <div className="flex flex-row">
        <div className="flex-1 py-32">
          {_.map(MovieTicketPriceData, (val, idx) => {
            return (
              <MovieTicketChosePosTicketCard
                id={val.id}
                name={val.name}
                price={val.price}
                key={idx}
              />
            );
          })}
        </div>

        <MovieTicketChosePosScreenSideInfo />
      </div>
    </Screen>
  );
});
