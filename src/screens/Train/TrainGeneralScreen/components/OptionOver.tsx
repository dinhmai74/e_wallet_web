import React from "react";

interface Props {
  options: string[];
}

export const OptionOver: React.FC<Props> = props => {
  const { options } = props;
  return (
    <div className="relative pb-8 md:pb-0">
      <select
        className="block appearance-none w-full py-3 pr-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-white"
        id="grid-state"
      >
        {options.map((val, k) => {
          return <option key={k}>{val}</option>;
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
