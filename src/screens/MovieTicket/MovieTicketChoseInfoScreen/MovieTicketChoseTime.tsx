import React, { useContext } from "react";
import { PlaceModel } from "mock-data/home/movies";
import { MovieTicketChoseInfoCard } from "screens/MovieTicket/MovieTicketChoseInfoScreen/components/MovieTicketChoseInfoCard";
import { observer } from "mobx-react";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
// import ScrollMenu from "react-horizontal-scrolling-menu";
//
// const generatePlacesComp = (times: MovieTimeModel[]) => {
//   return times.map((el, idx) => {
//     return <MovieTicketChoseInfoCard time={el} key={idx} />;
//   });
// };
// const ArrowLeft = () => <ArrowBackIos />;
// const ArrowRight = () => <ArrowForwardIos />;

interface Props {
  place: PlaceModel;
}

export const MovieTicketChoseTime: React.FC<Props> = observer(props => {
  const { place } = props;
  const { times, place: placeName } = place;

  const movieTicketStore = useContext(MovieTicketStoreContext);
  const history = useHistory();

  // const scrollData = generatePlacesComp(times);

  const onClick = time => {
    movieTicketStore.ticketInfo = {
      timeId: time.id,
      placeId: place.id
    };
    history.push(Paths.movieTicketChosePos);
  };

  return (
    <div className="my-8">
      <p className="text__h2">{placeName}</p>
      {/*<ScrollMenu*/}
      {/*  alignCenter={false}*/}
      {/*  data={scrollData}*/}
      {/*  arrowLeft={ArrowLeft()}*/}
      {/*  arrowRight={ArrowRight()}*/}
      {/*/>*/}
      <div className="flex flex-row">
        {times.map(val => (
          <MovieTicketChoseInfoCard time={val} key={val.id} onClick={onClick} />
        ))}
      </div>
    </div>
  );
});
