import { MenuItem, TextField } from "@material-ui/core";
import { AppButton, AppCard } from "components";
import React, { useMemo, useState } from "react";
import { Day } from "react-modern-calendar-datepicker";
import { OptionOver } from "screens/Train/TrainGeneralScreen/components/OptionOver";
import { TrainDatePicker } from "screens/Train/TrainGeneralScreen/components/TrainDatePicker";
import colors from "theme/color/_colors.scss";

const tripTypes = ["Round trip", "One way"];
const seatTypes = ["First class", "Second class"];

const generatePassengers = (num = 10, type = " adult"): string[] => {
  const rs: string[] = [];

  for (let i = 0; i <= num; i++) {
    const temp = i > 1 ? i + type + "s" : i + type;
    rs.push(temp);
  }

  return rs;
};

const currencies = [
  {
    value: "Chose place",
    label: "Chose place"
  },
  {
    value: "HCM",
    label: "HCM"
  },
  {
    value: "Hà nội",
    label: "Hà nội"
  },
  {
    value: "Đà Nẵng",
    label: "Đà Nẵng"
  },
  {
    value: "Vinh",
    label: "Vinh"
  }
];

interface Props {
  onResult: (result: any) => void;
}

export const TrainGeneralScreenSearchForm: React.FC<Props> = props => {
  const { onResult } = props;
  const adults = useMemo(() => generatePassengers(10), []);
  const child = useMemo(() => generatePassengers(10, " children"), []);

  const [from, setFrom] = React.useState("Chose place");
  const [to, setTo] = React.useState("Chose place");
  const [departDate, setDepartDate] = useState<Day>();
  const [returnDate, setReturnDate] = useState<Day>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value);
  };

  return (
    <div>
      <p className="text__h3 color__steel mb-8">Info:</p>
      <AppCard className="px-8 py-4 color__blue-grey text__b1 max-w-xl">
        <div className="flex-col flex md:flex-row ">
          <OptionOver options={tripTypes} />
          <OptionOver options={adults} />
          <OptionOver options={child} />
          <OptionOver options={seatTypes} />
        </div>
        <div className="flex flew-row my-4">
          <TextField
            id="outlined-select-currency"
            select
            label="From: "
            value={from}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className="text__btn border-none mr-4 w-full bg-white"
            InputLabelProps={{
              style: { color: colors.blueGrey, opacity: "0.6" } as any
            }}
            InputProps={{
              style: { fontSize: 14, color: colors.blueGrey } as any
            }}
          >
            {currencies.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                className="text-blueGrey "
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="To: "
            value={to}
            onChange={e => setTo(e?.target?.value)}
            variant="outlined"
            size="small"
            className="text__btn border-none  w-full"
            InputLabelProps={{
              style: { color: colors.blueGrey, opacity: "0.6" } as any
            }}
            InputProps={{
              style: { fontSize: 14, color: colors.blueGrey } as any
            }}
          >
            {currencies.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                className="text-blueGrey"
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex flex-row my-4 mt-8">
          <TrainDatePicker
            value={departDate}
            onChange={setDepartDate}
            label="Depart:"
            className="mr-4"
          />

          <TrainDatePicker
            value={returnDate}
            onChange={setReturnDate}
            label="Return:"
          />
        </div>
        <div className="justify-center flex pt-4 pb-2">
          <AppButton
            className="px-32"
            tx="Search"
            onClick={() => {
              onResult(true);
            }}
          />
        </div>
      </AppCard>
    </div>
  );
};
