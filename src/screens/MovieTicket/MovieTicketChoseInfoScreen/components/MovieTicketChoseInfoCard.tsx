import React from "react";
import { MovieTimeModel } from "mock-data/home/movies";
import moment from "moment";

interface Props {
  time: MovieTimeModel;
  onClick: (time) => void;
}
export const MovieTicketChoseInfoCard: React.FC<Props> = props => {
  const { time } = props;
  const { roomName, time: showTime } = time;

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-md p-4 mx-4 my-8 cursor-pointer"
      onClick={() => props.onClick(time)}
    >
      <div className="px-6 py-4">
        <p className="color__steel text-center mb-4">
          {moment(showTime).format("HH: MM")}
        </p>
        <p className="color__steel text-center">{roomName}</p>
      </div>
    </div>
  );
};
