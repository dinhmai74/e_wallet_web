import React from "react";

import { useSidebar } from "components/SideBar";
import { animated } from "react-spring";

export interface ScreenProps {
  children?: any;
  className?: string;
}

export const Screen: React.FC<ScreenProps> = ({ children, className }) => {
  // Sidebar
  const { isMobile, useDragMain, useMainStyle } = useSidebar();

  const mainStyle = useMainStyle();
  const bindMain = useDragMain();

  const clName = `flex-1 ${className}`;

  return (
    <animated.div
      {...(isMobile ? bindMain() : {})}
      className={clName}
      style={mainStyle}
    >
      {children}
    </animated.div>
  );
};

Screen.defaultProps = {
  className: " pt-32"
};
