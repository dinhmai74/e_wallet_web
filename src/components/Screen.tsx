import { useSidebar } from "components/SideBar";
import React from "react";
import { animated } from "react-spring";

export interface ScreenProps {
  children?: any;
  className?: string;
  haveFooter?: boolean;
  style?: any;
  [rest: string]: any;
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  className,
  style,
  ...rest
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
      style={{ ...mainStyle, ...style }}
      {...rest}
    >
      {children}
    </animated.div>
  );
};

Screen.defaultProps = {
  className: " px-12 pt-40 md:px-20 lg:px-20 md:pt-32 pb-8"
};
