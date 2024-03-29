import { MovieInfoContent } from "components/MovieInfoContent";
import React from "react";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";

interface Props {}

export const MovieTicketChosePosScreenSideInfo: React.FC<Props> = props => {
  const history = useHistory();
  const navigate = () => history.push(Paths.movieTicketChosePosDetail);
  return (
    <div className="w-1/2 bg__bg-5 min-h-screen hidden md:inline-block pt-32">
      <MovieInfoContent onConfirm={navigate} disabledButton={false} />
    </div>
  );
};
