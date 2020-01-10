import { Screen } from "components";
import { AppDatePicker } from "components/AppDatePicker";
import { Divider } from "components/Divider";
import { observer } from "mobx-react";
import { MovieData, PlaceData, PlaceModel } from "mock-data/home/movies";
import moment, { Moment } from "moment";
import React, { useContext, useEffect, useState } from "react";
import { MovieTicketChoseTime } from "screens/MovieTicket/MovieTicketChoseInfoScreen/MovieTicketChoseTime";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { MovieTicketChoseInfoScreenInfoSide } from "./MovieTicketChoseInfoScreenInfoSide";

interface Props {}

export const MovieTicketChoseInfoScreen: React.FC<Props> = observer(props => {
  const movieTicketStore = useContext(MovieTicketStoreContext);
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());
  const [places, setPlaces] = useState<PlaceModel[]>([]);

  const movie = MovieData.find(val => val.id === movieTicketStore.id);
  useEffect(() => {
    const tempPlaces: PlaceModel[] = [];
    PlaceData.forEach(place => {
      const inSelected = place.date.filter(d =>
        moment(d).isSame(selectedDate, "day")
      );
      if (inSelected.length > 0) {
        tempPlaces.push(place);
      }
    });

    setPlaces([...tempPlaces]);
  }, [selectedDate, setPlaces]);

  if (!movie) {
    return <div>error</div>;
  }

  return (
    <Screen className="px-12 md:pl-20 md:px-0">
      <div className="flex flex-row">
        <div className="flex flex-1  flex-col pt-32">
          <div className="py-8 max-w-xl mx-8">
            <AppDatePicker
              onChange={date => {
                setSelectedDate(date);
              }}
              minDate={moment()}
            />
            <Divider />
          </div>

          <div className="">
            {places.map(val => (
              <MovieTicketChoseTime place={val} key={val.id} />
            ))}
          </div>
        </div>

        <MovieTicketChoseInfoScreenInfoSide movie={movie} />
      </div>
    </Screen>
  );
});
