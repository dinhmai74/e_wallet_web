import { observer } from "mobx-react";
import { PlaceModel } from "mock-data/home/movies";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { MovieTicketChoseInfoCard } from "screens/MovieTicket/MovieTicketChoseInfoScreen/components/MovieTicketChoseInfoCard";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { useScaleGroup, useFadeIn } from "utils/animations/useAnimations";
import { animated } from "react-spring";
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

  const transitions = useScaleGroup(times);

  const fadeIn = useFadeIn();

  return (
    <div className="my-8">
      <animated.p className="text__h2" style={fadeIn}>
        {placeName}
      </animated.p>
      <div className="flex flex-row">
        {transitions.map(({ item, key, props }) => (
          <animated.div key={item.id} style={props}>
            <MovieTicketChoseInfoCard
              time={item}
              key={item.id}
              onClick={onClick}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
});
