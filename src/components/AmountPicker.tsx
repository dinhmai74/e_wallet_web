import React from "react";
import { IconDescrease, IconIncrease } from "theme/Icons";

interface Props {
  onChange: (val: number) => void;
  value: number;
}

export const AmountPicker: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex-row flex">
      <IconDescrease
        onClick={() => {
          if (value > 0) onChange(value - 1);
        }}
      />
      <p className="text-center self-center align-middle px-8">{value}</p>
      <IconIncrease
        onClick={() => {
          onChange(value + 1);
        }}
      />
    </div>
  );
};
