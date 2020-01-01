import { AppButton } from "components/AppButton";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { TotalRowText } from "components/TotalRowText";
import _ from "lodash";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { MovieData, MovieDigitalType, MovieDimensionType, MovieTicketPriceData, PlaceData } from "mock-data/home/movies";
import moment from "moment";
import React, { useContext } from "react";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { DateFormat } from "utils/strings";


interface Props {
  onConfirm: () => void;
  disabledButton: boolean;
}

export const MovieInfoContent: React.FC<Props> = observer(
  ({ children, onConfirm, disabledButton }) => {
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

    const seats = toJS(store.seatAmount);
    let price = 0;

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
            rightTx={`${moment(showTime).format(
              "HH:MM | dddd, DD/ MM/ YYYY"
            )} `}
          />
          {children}
          <div className="flex-1" />

          <div className="pb-8">
            <TotalRowText value={price} className="py-4" />
            <AppButton
              fullWidth
              className="my-4"
              disabled={price === 0 || disabledButton}
              onClick={onConfirm}
            >
              Confirm
            </AppButton>
          </div>
        </div>
      </div>
    );
  }
);

MovieInfoContent.defaultProps = {
  disabledButton: false
};

export const NotFoundMovie: React.FC = () => {
  return (
    <div>
      Sorry we have a problem about your choice, please back to chose movie
      page...
    </div>
  );
};
