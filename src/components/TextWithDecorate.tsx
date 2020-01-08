import React from "react";

interface Props {
  className?: string;
  textClass?: string;
  space?: number;
}

export const TextWithDecorate: React.FC<Props> = props => {
  const { space, className, children, textClass } = props;
  return (
    <div
      className={`flex flex-row block items-center color__blue-grey ${className}`}
    >
      <div className={`w-full bg__blue-grey h-px mr-${space} `} />
      <p className={"whitespace-no-wrap " + textClass}>{children}</p>
      <div className={`w-full bg__blue-grey h-px ml-${space}`} />
    </div>
  );
};
