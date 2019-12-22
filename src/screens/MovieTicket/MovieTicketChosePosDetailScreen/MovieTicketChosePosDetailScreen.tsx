import { Screen } from "components";
import { observer } from "mobx-react";
import React from "react";
import { MovieTicketChosePosDetailScreenSideInfo } from "screens/MovieTicket/MovieTicketChosePosDetailScreen/MovieTicketChosePosDetailScreen.SideInfo";

export const MovieTicketChosePosDetailScreen: React.FC = observer(() => {
  return (
    <Screen className="ml-32 flex">
      <div className="flex flex-1" />
      <MovieTicketChosePosDetailScreenSideInfo selectedSeats={[]} />
    </Screen>
  );
});
