import { AppButton, Screen } from "components";
import _ from "lodash";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import {
  MovieData,
  MovieTicketPriceData,
  PlaceData
} from "mock-data/home/movies";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useWindowSize } from "react-use";
import { Paths } from "router/PrimaryRouters";
import { MovieTicketChosePosScreenSideInfo } from "screens/MovieTicket/MovieTicketChosePosScreen/MovieTicketChosePosScreen.SideInfo";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { screenSize } from "theme/metrics";
import { MovieTicketChosePosTicketCard } from "./components/MovieTicketChosePos.TicketCard";

interface Props {}

export const MovieTicketChosePosScreen: React.FC<Props> = observer(props => {
  const history = useHistory();
  const navigate = () => history.push(Paths.movieTicketChosePosDetail);
  const { width } = useWindowSize();

  const store = useContext(MovieTicketStoreContext);

  const movieId = store.id;
  const ticketInfo = toJS(store.ticketInfo);
  const movie = MovieData.find(v => v.id === movieId);
  const place = PlaceData.find(v => v.id === ticketInfo?.placeId);

  if (!movie || !place) {
    return <NotFoundMovie />;
  }
  const time = place?.times.find(v => v.id === ticketInfo?.timeId);
  if (!time) {
    return <NotFoundMovie />;
  }

  const seats = toJS(store.seatAmount);
  let price = 0;

  _.forEach(seats, (val, key) => {
    const p = MovieTicketPriceData.find(v => v.id === key);
    price += val * p!.price;
  });
  return (
    <Screen className="md:pl-24 px-12 md:px-0">
      <div className="flex flex-row">
        <div className="flex-1 py-32 px-4">
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

          {width < screenSize.md && (
            <AppButton
              onClick={navigate}
              fullWidth
              className="mt-4"
              disabled={price === 0}
            >
              Confirm
            </AppButton>
          )}
        </div>

        <MovieTicketChosePosScreenSideInfo />
      </div>
    </Screen>
  );
});

const NotFoundMovie: React.FC = () => {
  return (
    <div>
      Sorry we have a problem about your choice, please back to chose movie
      page...
    </div>
  );
};
