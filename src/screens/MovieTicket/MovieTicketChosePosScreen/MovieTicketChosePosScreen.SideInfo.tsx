import { MovieInfoContent } from "components/MovieInfoContent";
import React from "react";

interface Props {}

export const MovieTicketChosePosScreenSideInfo: React.FC<Props> = props => {
  return (
    <div className="w-1/2 bg__bg-5 min-h-screen hidden md:inline-block pt-32">
      <MovieInfoContent />
    </div>
  );
};
