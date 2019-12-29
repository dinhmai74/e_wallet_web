import React, { useState, useEffect, useContext } from "react";
import { AmountPicker } from "components/AmountPicker";
import { formatMoney } from "utils/number";
import { observer } from "mobx-react";
import { MovieTicketStoreContext } from "stores/MovieTicketStore";

interface Props {
  id: string;
  name: string;
  price: number;
}

export const MovieTicketChosePosTicketCard: React.FC<Props> = observer(
  ({ id, name, price }) => {
    const [value, setValue] = useState<number>(0);
    const store = useContext(MovieTicketStoreContext);

    useEffect(() => {
      store.seatAmount[id] = value;
      // eslint-disable-next-line
    }, [value]);

    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md p-4 mx-4 my-8 cursor-pointer flex flex-row justify-between">
        <div className="px-8">
          <p className="text__d3 color__blue-grey opacity-75 ">{name}</p>
          <p className="text__b1 color__grey pt-4">{formatMoney(price)}</p>
        </div>

        <div className="self-center">
          <AmountPicker
            value={value}
            onChange={val => {
              setValue(val);
            }}
          />
        </div>
      </div>
    );
  }
);
