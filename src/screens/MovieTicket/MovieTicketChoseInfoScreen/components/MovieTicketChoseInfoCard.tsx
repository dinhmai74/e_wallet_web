import { MovieTimeModel } from "mock-data/home/movies";
import moment from "moment";
import React from "react";
import { useZoomInEffect } from "utils/animations/useAnimations";
import { animated } from "react-spring";

interface Props {
  time: MovieTimeModel;
  onClick: (time) => void;
}
export const MovieTicketChoseInfoCard: React.FC<Props> = props => {
  const { time } = props;
  const { roomName, time: showTime } = time;
  const [zoomAnim,zoomIn,zoomBack] = useZoomInEffect()

  return (
    <animated.div
      className="max-w-sm rounded overflow-hidden shadow-md p-4 mx-4 my-8 cursor-pointer"
      onMouseMove={zoomIn}
      onMouseLeave={zoomBack}
      onClick={() => props.onClick(time)}
      style={zoomAnim}
    >
      <div className="px-6 py-4">
        <p className="color__steel text-center mb-4">
          {moment(showTime).format("HH: MM")}
        </p>
        <p className="color__steel text-center">{roomName}</p>
      </div>
    </animated.div>
  );
};
