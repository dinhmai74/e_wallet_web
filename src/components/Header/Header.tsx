import React from "react";
import { images } from "theme";
import { useSidebar } from "components/SideBar";
import { IconMenu } from "theme/Icons";
import { metrics } from "theme/metrics";

export const Header: React.FC = () => {
  const { toggleSidebar } = useSidebar();
  const absolute = "absolute";
  return (
    <div
      className={`flex py-12 px-20 flex-row justify-between inset-x-0 top-0 ${absolute} z-0`}
    >
      <img src={images.logo} className="img__logo" alt="logo" />
      <IconMenu onClick={toggleSidebar} width={metrics.icon.md} />
    </div>
  );
};
