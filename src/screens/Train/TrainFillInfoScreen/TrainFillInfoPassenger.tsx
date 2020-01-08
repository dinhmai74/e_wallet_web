import TextField from "@material-ui/core/TextField";
import { ArrowForwardIos } from "@material-ui/icons";
import { AppCard } from "components/AppCard";
import { TextWithDecorate } from "components/TextWithDecorate";
import React, { useEffect } from "react";
import { useBoolean } from "react-use";

interface Props {}

const passengers = [0, 1, 2];

export const TrainFillInfoPassenger: React.FC<Props> = () => {
  const [isShow, setIsShow] = useBoolean(false);
  return (
    <div className="flex-col max-w-xl">
      <TextWithDecorate space={12} className="my-8 mb-12">
        Passenger info
      </TextWithDecorate>
      {passengers.map(val => {
        return <PassengerCard showContent={isShow} key={val} />;
      })}

      <p
        className="color__blue-grey text__btn cursor-pointer text-right"
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? "Collapse all" : "Expand all"}
      </p>
    </div>
  );
};

interface PassengerCardProps {
  showContent: boolean;
}

const PassengerCard: React.FC<PassengerCardProps> = ({ showContent }) => {
  const [show, setShow] = useBoolean(false);
  useEffect(() => {
    setShow(showContent);
  }, [showContent, setShow]);

  return (
    <AppCard
      className="p-4 my-8 px-8 cursor-pointer flex flex-row justify-between color__grey max-w-xl"
      onClick={() => setShow(true)}
    >
      {!show && (
        <>
          <p className="p-2">Choosing passenger info</p>
          <ArrowForwardIos className="my-2" />
        </>
      )}

      {show && (
        <div className="flex flex-col flex-1 px-4 relative z-10 my-2">
          <TextField id="standard-basic" label="Name" className="mb-4" />
          <TextField id="standard-basic" label="Phone" className="mb-4" />
        </div>
      )}
    </AppCard>
  );
};
