import React, { useContext } from "react";
import { InformationCard } from "components/InformationCard";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import {
  MovieData,
  MovieTicketPriceData,
  PlaceData
} from "mock-data/home/movies";
import { NotFoundMovie } from "components/MovieInfoContent";
import moment from "moment";
import _ from "lodash";

interface Props {}

export const PaymentInfoCard: React.FC<Props> = observer(props => {
  const store = toJS(useContext(MovieTicketStoreContext));
  const movieId = store.id;
  const ticketInfo = toJS(store.ticketInfo);
  const movie = MovieData.find(v => v.id === movieId);
  const place = PlaceData.find(v => v.id === ticketInfo?.placeId);
  const seats = toJS(store.seatAmount);

  if (!movie || !place) {
    return <NotFoundMovie />;
  }
  const time = place?.times.find(v => v.id === ticketInfo?.timeId);
  if (!time) {
    return <NotFoundMovie />;
  }

  const { title } = movie;

  const { place: theaters } = place;
  const { roomName, time: showTime } = time;

  const timeTx = moment(showTime).format("HH:MM- dddd, DD/MM/YYYY");
  const theaterTx = `${theaters} - ${roomName}`;
  let seatsTx = "";
  store.seatPos.forEach(v => (seatsTx += `${v}, `));

  seatsTx = seatsTx.substr(0, seatsTx.length - 2);

  let price = 0;

  _.forEach(seats, (val, key) => {
    const p = MovieTicketPriceData.find(v => v.id === key);
    price += val * p!.price;
  });

  return (
    <InformationCard totalAmount={price} onSubmit={() => {}}>
      <RowTextSpaceBetween
        leftTx="Movie:"
        leftClassName="text-blueGrey font-normal"
        rightTx={title}
        className="mb-8"
      />
      <RowTextSpaceBetween
        leftTx="Time:"
        leftClassName="text-blueGrey font-normal"
        rightTx={timeTx + ""}
        className="my-8"
      />
      <RowTextSpaceBetween
        leftTx="Theater:"
        leftClassName="text-blueGrey font-normal"
        rightTx={theaterTx}
        className="my-8"
      />
      <RowTextSpaceBetween
        leftTx="Seats:"
        leftClassName="text-blueGrey font-normal"
        rightTx={seatsTx}
        className="my-8 mb-8"
      />
    </InformationCard>
  );
});
