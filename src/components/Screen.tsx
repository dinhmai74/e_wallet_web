import React from "react";

import { useSidebar } from "components/SideBar";
import { animated } from "react-spring";
import { Footer } from "components/Footer";

export interface ScreenProps {
  children?: any;
  className?: string;
  haveFooter?: boolean;
}

export const Screen: React.FC<ScreenProps> = ({
  haveFooter,
  children,
  className
}) => {
  // Sidebar
  const { isMobile, useDragMain, useMainStyle } = useSidebar();

  const mainStyle = useMainStyle();
  const bindMain = useDragMain();

  const clName = `flex-1 ${className} overflow-hidden`;

  return (
    <animated.div
      {...(isMobile ? bindMain() : {})}
      className={clName}
      style={mainStyle}
    >
      {children}
      {haveFooter && <Footer />}
    </animated.div>
  );
};

Screen.defaultProps = {
  className: " md:px-20 lg:px-20 pt-32"
};
