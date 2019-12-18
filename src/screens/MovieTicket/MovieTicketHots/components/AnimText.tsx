import React from "react";
import { useHotMovie } from "screens/MovieTicket/MovieTicketHots/useHotMovie";

interface Props {
  children: string;
  className: string;
}

export const AnimText: React.FC<Props> = ({ children, className }) => {
  const { isChanging } = useHotMovie();
  const anim = isChanging && "anim--fadeIn";

  return <p className={`${className} ${anim}`}>{children}</p>;
};
