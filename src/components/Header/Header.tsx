import React from "react";
import { images } from "theme";
import { useSidebar } from "components/SideBar";

export const Header: React.FC = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex py-12 px-20 flex-row justify-between">
      <img src={images.logo} className="img__logo" />
      <img src={images.icMenu} className="img__icon" onClick={toggleSidebar} />
    </div>
  );
};
