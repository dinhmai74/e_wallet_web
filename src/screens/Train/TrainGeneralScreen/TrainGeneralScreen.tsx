import { Screen } from "components";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import * as Spaces from "react-spaces";
import { useWindowSize } from "react-use";
import { TrainGeneralScreenSearchForm } from "screens/Train/TrainGeneralScreen/TrainGeneralScreenSearchForm";
import { TrainGeneralScreenSideInfo } from "screens/Train/TrainGeneralScreen/TrainGeneralScreenSideInfo";
import {
  TrainGeneralSearchFail,
  TrainGeneralSearchResult
} from "screens/Train/TrainGeneralScreen/TrainGeneralSearchResult";

interface Props {}
export const TrainGeneralScreen: React.FC<Props> = () => {
  const { width } = useWindowSize();
  const [searched, setSearched] = useState();
  return (
    <Screen className="flex flex-row">
      <TrainGeneralScreenSideInfo />

      <Spaces.ViewPort className="mt-32">
        {width > 1000 && (
          <Spaces.LeftResizable size={"30%"} className={"hidden"} />
        )}
        <Spaces.Fill scrollable>
          <div className="flex-1 px-12 md:px-48">
            <TrainGeneralScreenSearchForm onResult={() => setSearched(true)} />
            {searched && <TrainGeneralSearchResult />}
            {!searched && <TrainGeneralSearchFail />}
          </div>
        </Spaces.Fill>
      </Spaces.ViewPort>
    </Screen>
  );
};
