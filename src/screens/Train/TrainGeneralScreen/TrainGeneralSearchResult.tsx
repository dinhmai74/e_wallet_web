import { AppCard } from "components/AppCard";
import React from "react";
import { useHistory } from "react-router";
import { animated, config, useChain, useSpring, useTransition } from "react-spring";
import { Paths } from "router/PrimaryRouters";
import { images } from "theme/images";
import { formatMoney } from "utils/number";

interface TrainInfoModel {
  time: string;
  id: string;
  price: number;
}

const TrainAvailable: TrainInfoModel[] = [
  {
    time: "6:00 - 15:30 (33h 30')",
    id: "SE201",
    price: 400000
  },
  {
    time: "9:00 - 15:30 (30h 30')",
    id: "SE301",
    price: 400000
  },
  {
    time: "6:00 - 15:30 (33h 25')",
    id: "SE401",
    price: 400000
  }
];

export const TrainGeneralSearchFail: React.FC = () => {
  return (
    <div className="relative md:left-1/5 my-8">
      <img
        src={`${process.env.PUBLIC_URL}/${images.error.noResult}`}
        alt="no result"
        className="pb-4"
        style={{
          width: 310,
          height: 235
        }}
      />
      <p className="text__btn color__blue-grey ml-32">No result...</p>
    </div>
  );
};

export const TrainGeneralSearchResult: React.FC<{ show: boolean }> = ({
  show
}) => {
  const springRef = React.useRef(null);
  const { opacity } = useSpring({
    config: config.stiff,
    from: { opacity: 0 },
    ref: springRef,
    to: { opacity: 1 }
  });

  const transRef = React.useRef(null);
  const transitions = useTransition(
    show? TrainAvailable : [],
    item => item.id,
    {
      unique: true,
      trail: 400 / TrainAvailable.length,
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" }
    }
  );
  useChain(show? [springRef, transRef] : [transRef, springRef], [
    0,
    show? 0.1 : 0.6
  ]);

  return (
    <div className="mt-12">
      <animated.p
        className="text__h3 my-8 color__steel"
        style={{ opacity }}
      >
        Available Train:
      </animated.p>
      {transitions.map(({ item, key, props }) => (
        <animated.div style={props} key={item.id}>
          <CardItem item={item} />
        </animated.div>
      ))}
    </div>
  );
};

interface OwnProps {
  item: TrainInfoModel;
}

const CardItem: React.FC<OwnProps> = props => {
  const { item } = props;
  const { price, time, id } = item;
  const history = useHistory();
  return (
    <AppCard
      className="px-8 py-8 text-center my-8 text__btn max-w-xl cursor-pointer"
      onClick={() => history.push(Paths.trainChosePos)}
    >
      <div className="flex flex-row self-stretch color__blue-grey text-center pb-4 ">
        <div className="flex flex-1 self-stretch justify-center">
          <p className="text-center">Time</p>
        </div>
        <div className="flex flex-1 self-stretch justify-center">
          <p className="text-center">Train</p>
        </div>
        <div className="flex flex-1 self-stretch justify-center">
          <p className="text-center">Price</p>
        </div>
      </div>

      <div className="flex flex-row self-stretch color__grey text-center ">
        <div className="flex flex-1 self-stretch justify-center">
          <p className="text-center">{time}</p>
        </div>
        <div className="flex flex-1 self-stretch justify-center">
          <p className="text-center">{id}</p>
        </div>
        <div className="flex flex-1 self-stretch justify-center">
          <p className="text-center">{formatMoney(price)}/ person</p>
        </div>
      </div>
    </AppCard>
  );
};
