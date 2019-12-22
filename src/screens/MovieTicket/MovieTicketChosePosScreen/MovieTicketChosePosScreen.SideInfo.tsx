import React, { useContext } from "react";
import moment from "moment";
import { observer } from "mobx-react";
import _ from "lodash";
import { toJS } from "mobx";

import {
  MovieModel,
  PlaceModel,
  MovieTimeModel,
  MovieDimensionType,
  MovieDigitalType,
  MovieTicketPriceData
} from "mock-data/home/movies";
import { DateFormat } from "utils/strings";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { TotalRowText } from "components/TotalRowText";
import { AppButton } from "components";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";

interface Props {
  movie?: MovieModel;
  place?: PlaceModel;
  time?: MovieTimeModel;
}

export const MovieTicketChosePosScreenSideInfo: React.FC<Props> = props => {
  const { movie, place, time } = props;

  return (
    <div className="w-1/2 bg__bg-5 min-h-screen hidden md:inline-block pt-32">
      {movie && place && time ? (
        <Content movie={movie} place={place} time={time} />
      ) : (
        <div>
          Sorry we have a problem about your choice, please back to chose movie
          page...
        </div>
      )}
    </div>
  );
};

const Content: React.FC<{
  movie: MovieModel;
  place: PlaceModel;
  time: MovieTimeModel;
}> = observer(({ movie, place, time }) => {
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
  const store = useContext(MovieTicketStoreContext);

  const subTx = `${MovieDimensionType[dimensionType]} | ${
    MovieDigitalType[digitalType]
  } | ${duration} min | ${moment(releaseDate).format(DateFormat)}`;

  const seats = toJS(store.seats);
  let price = 0;

  console.log("seat", seats);

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
        <div className="py-8" />

        <div className="pb-8">
          <TotalRowText value={price} className="py-4" />
          <AppButton fullWidth className="my-4" disabled={price === 0}>
            Confirm
          </AppButton>
        </div>
      </div>
    </div>
  );
});
