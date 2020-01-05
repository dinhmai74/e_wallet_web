import TextField from "@material-ui/core/TextField";
import { AppCard } from "components/AppCard";
import { TextWithDecorate } from "components/TextWithDecorate";
import React from "react";

interface Props {}

export const TrainFillInfoReseller: React.FC<Props> = () => {
  return (
    <div className="flex-col max-w-xl">
      <TextWithDecorate space={12} className="my-8 mb-12">
        Passenger info
      </TextWithDecorate>
      <ResellerCard />;
    </div>
  );
};

const ResellerCard: React.FC = () => {
  return (
    <AppCard className="py-4 my-8 px-12 flex flex-col color__grey max-w-xl">
      <TextField id="standard-basic" label="Name" className="mb-4" />
      <TextField
        id="standard-basic"
        label="CMND/ Passport/ GLPX"
        className="mb-4"
      />
      <TextField id="standard-basic" label="Email" className="mb-4" />
      <TextField id="standard-basic" label="Phone" className="mb-6" />
    </AppCard>
  );
};
