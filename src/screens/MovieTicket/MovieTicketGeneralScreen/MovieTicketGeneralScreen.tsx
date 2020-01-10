import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Screen } from "components";
import _ from "lodash";
import { observer } from "mobx-react";
import { MovieData } from "mock-data/home/movies";
import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { MovieCard } from "screens/MovieTicket/components/MovieCard";
import { MovieTicketHots } from "./MovieTicketHots";
import { useScaleAndFadeOut } from "utils/animations/useAnimations";
import { animated } from "react-spring";

const UpcomingListMovies = (setOut: () => void) => {
  const history = useHistory();
  return _.shuffle(MovieData).map(el => {
    const { id: eID } = el;
    return (
      <MovieCard
        movie={el}
        key={eID}
        onClick={() => {
          setOut();
          setTimeout(() => {
            history.push(Paths.movieTicketDetail + `/${eID}`);
          }, 300);
        }}
      />
    );
  });
};

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;

export const MovieTicketGeneral: React.FC = observer(() => {
  const [fadeOut, setOut] = useScaleAndFadeOut();
  const onShowing = UpcomingListMovies(setOut);
  const upComing = UpcomingListMovies(setOut);

  return (
    <Screen className="">
      <MovieTicketHots />

      <animated.div style={fadeOut}>
        <div className="my-20 px-8 md:px-20">
          <div>
            <div className="flex-row flex justify-between pb-8">
              <p className="text__h1 color__grey">Comming soon</p>
              <p className="color__steel">See all</p>
            </div>
            <ScrollMenu
              alignCenter={false}
              data={onShowing}
              arrowLeft={ArrowLeft()}
              arrowRight={ArrowRight()}
            />
          </div>
        </div>

        <div className="my-20 px-20">
          <div>
            <div className="flex-row flex justify-between pb-8">
              <p className="text__h1 color__grey">Upcoming </p>
              <p className="color__steel">See all</p>
            </div>
            <ScrollMenu
              alignCenter={false}
              data={upComing}
              arrowLeft={ArrowLeft()}
              arrowRight={ArrowRight()}
            />
          </div>
        </div>
      </animated.div>
    </Screen>
  );
});
