import React from "react";
import styled from "styled-components";

import { images } from "theme";
import { useSidebar } from "components/SideBar";
import { IconMenu } from "theme/Icons";
import { metrics } from "theme/metrics";
import { useHistory } from "react-router";

export const Header: React.FC = () => {
  const { toggleSidebar } = useSidebar();
  const absolute = "absolute";
  const history = useHistory();
  return (
    <div
      className={`flex min-w-screen py-12 pl-20 md:pr-20 flex-row justify-between inset-x-0 top-0 ${absolute} z-0`}
    >
      <img
        src={process.env.PUBLIC_URL + "/" + images.logo}
        className="img__logo"
        alt="logo"
        onClick={() => history.push("/")}
      />
      <StyledIconMenu onClick={toggleSidebar} width={metrics.icon.md} />
    </div>
  );
};

export const StyledIconMenu = styled(IconMenu)`
  cursor: pointer;
`;
