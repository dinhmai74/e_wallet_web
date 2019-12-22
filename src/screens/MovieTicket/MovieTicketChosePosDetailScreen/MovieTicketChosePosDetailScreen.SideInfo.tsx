import { MovieInfoContent } from "components/MovieInfoContent";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { observer } from "mobx-react";
import React from "react";

interface Props {
  selectedSeats: string[];
}

export const MovieTicketChosePosDetailScreenSideInfo: React.FC<Props> = observer(
  () => {
    return (
      <div className="w-1/2 bg__bg-5 min-h-screen hidden md:inline-block pt-32">
        <MovieInfoContent>
          <RowTextSpaceBetween
            leftTx="Seats"
            rightTx="123"
            className="flex-1 py-4"
          />
        </MovieInfoContent>
      </div>
    );
  }
);
