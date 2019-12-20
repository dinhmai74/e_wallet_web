import React, { useContext } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Screen } from "components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import { MovieTicketHots } from "./MovieTicketHots";
import { MovieData } from "mock-data/home/movies";
import { MovieCard } from "screens/MovieTicket/components/MovieCard";
import { observer } from "mobx-react";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";

const UpcomingListMovies = () => {
  const history = useHistory();
  return MovieData.map(el => {
    const { id: eID } = el;
    return (
      <MovieCard
        movie={el}
        key={eID}
        onClick={id => {
          history.push(Paths.movieTicketDetail + `/${eID}`);
        }}
      />
    );
  });
};

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;

export const MovieTicketGeneral: React.FC = observer(() => {
  const onShowing = UpcomingListMovies();

  return (
    <Screen className="">
      <MovieTicketHots />

      <div className="my-20 px-20">
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
            data={onShowing}
            arrowLeft={ArrowLeft()}
            arrowRight={ArrowRight()}
          />
        </div>
      </div>
    </Screen>
  );
});
