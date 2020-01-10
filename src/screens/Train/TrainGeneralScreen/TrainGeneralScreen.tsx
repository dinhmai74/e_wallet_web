import { Screen } from "components";
import React, { useRef, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import * as Spaces from "react-spaces";
import { animated, useChain, useSpring, useTransition } from "react-spring";
import { useWindowSize } from "react-use";
import { TrainGeneralScreenSearchForm } from "screens/Train/TrainGeneralScreen/TrainGeneralScreenSearchForm";
import { TrainGeneralScreenSideInfo } from "screens/Train/TrainGeneralScreen/TrainGeneralScreenSideInfo";
import { TrainGeneralSearchResult } from "screens/Train/TrainGeneralScreen/TrainGeneralSearchResult";

interface Props {}

const content = [
  ({ setSearched }) => (
    <TrainGeneralScreenSearchForm onResult={() => setSearched(true)} />
  ),
  ({ search }) => <TrainGeneralSearchResult show={search} />
];

export const TrainGeneralScreen: React.FC<Props> = () => {
  const { width } = useWindowSize();
  const [searched, setSearched] = useState();

  const infoRef = useRef(null);

  const animSideInfo = useSpring({
    to: { translateX: "0%" },
    from: { translateX: "100%" },
    ref: infoRef
  });

  const transRef = useRef(null);
  const transitions = useTransition(content, item => content.indexOf(item), {
    ref: transRef,
    unique: true,
    trail: 400 / content.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  useChain([infoRef, transRef], [0, 0.25]);

  return (
    <Screen className="flex flex-row">
      <animated.div style={animSideInfo}>
        <TrainGeneralScreenSideInfo />
      </animated.div>

      <Spaces.ViewPort className="mt-32">
        {width > 1000 && (
          <Spaces.LeftResizable size={"30%"} className={"hidden"} />
        )}
        <Spaces.Fill scrollable>
          <div className="flex-1 px-12 md:px-48">
            {transitions.map(({ item, props, key }) => {
              const Content= content[key]
              return (
                <animated.div key={key} style={props}>
                  <Content setSearched={setSearched} search={searched} />
                </animated.div>
              );
            })}
          </div>
        </Spaces.Fill>
      </Spaces.ViewPort>
    </Screen>
  );
};
