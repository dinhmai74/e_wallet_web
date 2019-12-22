import React, { useContext } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import _ from "lodash";

import { Screen } from "components";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import {
  MovieData,
  PlaceData,
  MovieTicketPriceData
} from "mock-data/home/movies";
import { MovieTicketChosePosScreenSideInfo } from "screens/MovieTicket/MovieTicketChosePosScreen/MovieTicketChosePosScreen.SideInfo";
import { MovieTicketChosePosTicketCard } from "./components/MovieTicketChosePos.TicketCard";

interface Props {}

export const MovieTicketChosePosScreen: React.FC<Props> = observer(props => {
  const store = useContext(MovieTicketStoreContext);
  const ticketInfo = toJS(store.ticketInfo);
  const movie = MovieData.find(val => val.id === store.id);
  const place = PlaceData.find(val => val.id === ticketInfo?.placeId);
  let time;
  if (place) {
    time = place.times.find(val => val.id === ticketInfo?.timeId);
  }

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

        <MovieTicketChosePosScreenSideInfo
          movie={movie}
          place={place}
          time={time}
        />
      </div>
    </Screen>
  );
});
