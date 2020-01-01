import { observer } from "mobx-react";
import React, { useContext } from "react";
import _ from "lodash";
import { toJS } from "mobx";

import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import { MovieInfoContent } from "components/MovieInfoContent";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";

interface Props {}

export const MovieTicketChosePosDetailScreenSideInfo: React.FC<Props> = observer(
  () => {
    const store = toJS(useContext(MovieTicketStoreContext));

    let seatsTx = "";

    _.forEach(store.seatPos, (val, k) => {
      seatsTx += val;
      seatsTx += ", ";
    });

    seatsTx = seatsTx.slice(0, -2);

    const history = useHistory();

    return (
      <div className="w-1/2 bg__bg-5 min-h-screen hidden md:inline-block pt-32">
        <MovieInfoContent
          onConfirm={() => history.push(Paths.movieTicketPayment)}
          disabledButton={!seatsTx}
        >
          <RowTextSpaceBetween
            leftTx="Seats"
            rightTx={seatsTx}
            className="flex-1 py-4"
          />
        </MovieInfoContent>
      </div>
    );
  }
);
