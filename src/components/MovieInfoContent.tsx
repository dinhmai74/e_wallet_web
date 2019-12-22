import React, { useContext } from "react";
import _ from "lodash";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import moment from "moment";

import {
  MovieData,
  PlaceData,
  MovieDimensionType,
  MovieDigitalType,
  MovieTicketPriceData
} from "mock-data/home/movies";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { DateFormat } from "utils/strings";
import { AppButton } from "components/AppButton";
import { TotalRowText } from "components/TotalRowText";
import { Paths } from "router/PrimaryRouters";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { useHistory } from "react-router";

export const MovieInfoContent: React.FC<{}> = observer(({ children }) => {
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

  const {
    sourceHorizontal,
    title,
    dimensionType,
    releaseDate,
    duration,
    digitalType
  } = movie;

  const { place: theaters } = place;
  const { roomName, time: showTime } = time;

  const subTx = `${MovieDimensionType[dimensionType]} | ${
    MovieDigitalType[digitalType]
  } | ${duration} min | ${moment(releaseDate).format(DateFormat)}`;

  const seats = toJS(store.seats);
  let price = 0;

  const history = useHistory();

  _.forEach(seats, (val, key) => {
    const p = MovieTicketPriceData.find(v => v.id === key);
    price += val * p!.price;
  });

  return (
    <div className="fixed pb-4 w-1/2">
      <img
        src={sourceHorizontal}
        className="mx-auto w-64 block "
        alt="poster"
      />

      <p className="py-4 text-primary text__h1 text-center">{title}</p>
      <p className="pb-4 text__d1 color__blue-grey text-center">{subTx}</p>

      <div className="px-32">
        <RowTextSpaceBetween
          className="flex-1 py-4"
          leftTx="Theaters:"
          rightTx={`${theaters} | ${roomName} `}
        />
        <RowTextSpaceBetween
          className="flex-1 py-4"
          leftTx="Time:"
          rightTx={`${moment(showTime).format("HH:MM | dddd, DD/ MM/ YYYY")} `}
        />
        {children}
        <div className="py-8" />

        <div className="pb-8">
          <TotalRowText value={price} className="py-4" />
          <AppButton
            fullWidth
            className="my-4"
            disabled={price === 0}
            onClick={() => history.push(Paths.movieTicketChosePosDetail)}
          >
            Confirm
          </AppButton>
        </div>
      </div>
    </div>
  );
});

export const NotFoundMovie: React.FC = () => {
  return (
    <div>
      Sorry we have a problem about your choice, please back to chose movie
      page...
    </div>
  );
};
