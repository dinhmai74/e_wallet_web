import React from "react";
import * as Space from "react-spaces";

import { useSidebar } from "components/SideBar";
import { animated } from "react-spring";

type Preset = "default";

export interface ScreenProps {
  children?: any;
  preset?: Preset;
}

export const ScreenPadding: React.FC = ({ children }) => {
  // Sidebar
  const { isMobile, useDragMain, useMainStyle } = useSidebar();

  const mainStyle = useMainStyle();
  const bindMain = useDragMain();

  return (
    <animated.div
      {...(isMobile ? bindMain() : {})}
      className="flex-1 px-20"
      style={mainStyle}
    >
      {children}
    </animated.div>
  );
};

export const Screen: React.FC<ScreenProps> = ({ children, preset }) => {
  if (preset === "default") return <ScreenPadding>{children}</ScreenPadding>;
  return <div>123</div>;
};

Screen.defaultProps = {
  preset: "default"
};
