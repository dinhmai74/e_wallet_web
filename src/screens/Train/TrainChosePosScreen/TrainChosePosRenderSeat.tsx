import { EventSeat } from "@material-ui/icons";
import _ from "lodash";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { useBoolean } from "react-use";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";
import styled from "styled-components";

interface Props {}
const rows = ["a", "b", "c", "d", "e", "g", "h", "j", "k", "f"];

export const TrainChosePosRenderSeat: React.FC<Props> = props => {
  return (
    <div className="flex flex-col j">
      {rows.map((val, idx) => (
        <RenderSeat row={val} key={idx} />
      ))}
    </div>
  );
};

interface RenderSeatProps {
  row: string;
}

const rowDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const RenderSeat: React.FC<RenderSeatProps> = props => {
  const { row } = props;
  return (
    <div className="flex flex-row flex-1 items-center my-4">
      {rowDetails.map((v, idx) => {
        let cln = "";
        if (idx === 1 || idx === 7) {
          cln += "pr-4 md:pr-8";
        }
        // const isVip = idx > 1 && idx < 8;
        return (
          <div key={idx} className="flex flex-row">
            <Seat isVip={false} row={row} idx={idx} />
            <div className={cln} />
          </div>
        );
      })}
    </div>
  );
};

const Seat: React.FC<{ isVip: boolean; row: string; idx: number }> = observer(
  ({ isVip, row, idx }) => {
    const [chosing, setChosing] = useBoolean(false);
    const [isLoaded, setLoaded] = useBoolean(false);
    const store = useContext(MovieTicketStoreContext);

    const seatName = `${row.toUpperCase()}${idx}`;
    if (store.seatPos.indexOf(seatName) > -1) {
      if (!isLoaded) {
        setChosing(true);
        setLoaded(true);
      }
    }

    let className = "cursor-pointer ";
    let color = "darkGrey";
    if (isVip) {
      color = "orangeYellow";
    }

    if (chosing) {
      color = "primary";
    }
    className += ` text-${color}`;

    const toggleSeat = () => {
      setChosing(!chosing);
    };

    useEffect(() => {
      if (chosing) {
        store.seatPos.push(seatName);
        store.seatPos = _.uniq(store.seatPos);
      } else {
        store.seatPos = store.seatPos.filter(v => v !== seatName);
      }
      // eslint-disable-next-line
    }, [chosing]);

    return (
      <EmptySeat fontSize="large" className={className} onClick={toggleSeat} />
    );
  }
);

const EmptySeat = styled(EventSeat)`
  font-size: 24px;
`;
