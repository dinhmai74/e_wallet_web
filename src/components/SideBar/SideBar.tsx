import React from "react";
import create from "zustand";
import colors from "theme/color/_colors.scss";

import { useDrag } from "react-use-gesture";
import { useSpring, animated, AnimatedProps, to } from "react-spring";
import { useLocalStorage, useMount, useWindowSize } from "react-use";
import { persist, immer } from "utils/zustand";
import { icons } from "theme";
import { Icon } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Paths } from "router/PrimaryRouters";

const LS_KEY = "sidebarState";
const DEFAULT_WIDTH = 280;
const V_THRESHOLD = 0.15; // velocity --> how fast the swipe is
const D_THRESHOLD = 0.6; // direction --> how straight the swipe is

interface SidebarState {
  isMobile: boolean;
  sidebarWidth: number;
  isOpen: boolean;
  toggleSidebar: () => void;
  useDragSidebar: () => any;
  useDragMain: () => any;
  useSidebarLayout: () => any;
  useSidebarStyle: () => any;
  useMainStyle: () => any;
}

const [useSidebar] = create<SidebarState>(
  persist(LS_KEY)(
    immer((set, get) => ({
      isMobile: true,
      sidebarWidth: 0,
      isOpen: false,
      toggleSidebar: () => {
        set((state: SidebarState) => {
          state.isOpen = !state.isOpen;
        });
      },
      useSidebarStyle: () => {
        const { translate } = useSpring({
          translate: [get().isOpen ? 0 : 100]
        });
        return {
          transform: to(translate, x => `translateX(${x}%)`)
        };
      },
      useMainStyle: () => {
        const { isMobile, isOpen, sidebarWidth } = get();
        return useSpring({
          marginRight: isMobile ? 0 : isOpen ? 0 : sidebarWidth
        });
      },
      useSidebarLayout: () => {
        const [persistedState] = useLocalStorage<SidebarState>(LS_KEY);
        const { width } = useWindowSize();
        const isMobile = width < 500;

        useMount(() => {
          set((state: SidebarState) => {
            state.sidebarWidth = isMobile ? width : DEFAULT_WIDTH;
            state.isMobile = isMobile;
            state.isOpen = persistedState.isOpen;
          });
        });
      },
      useDragSidebar: () => {
        return useDrag(({ direction, velocity, last }) => {
          if (direction[0] < -D_THRESHOLD && last && velocity > V_THRESHOLD) {
            get().toggleSidebar();
          }
        });
      },
      useDragMain: () => {
        return useDrag(({ direction, velocity, last }) => {
          if (direction[0] > D_THRESHOLD && last && velocity > V_THRESHOLD) {
            get().toggleSidebar();
          }
        });
      }
    }))
  )
);

interface ItemProps {
  onClick: () => void;
  children: any;
}

const Item: React.FC<ItemProps> = ({ onClick, children }) => {
  return (
    <div className="mb-6">
      <button
        className="btn bg-transparent text-white text__h3"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

function Sidebar() {
  const {
    toggleSidebar,
    useDragSidebar,
    sidebarWidth,
    useSidebarStyle
  } = useSidebar();

  const bindSidebar = useDragSidebar();

  const history = useHistory();
  const styles = useSidebarStyle();

  return (
    <animated.div
      {...bindSidebar()}
      className="fixed top-0 h-full scrolling-touch py-6 px-10"
      style={{
        ...styles,
        sidebarWidth,
        position: "absolute",
        right: 0,
        bot: 0,
        backgroundColor: colors.navBg
      }}
    >
      <div className="w-full">
        <button className="btn ml-0 pl-0 bg-transparent text-left mb-8">
          <Icon
            style={{ color: colors.white }}
            fontSize="large"
            className="self-end ml-0 d-block pl-0"
            onClick={() => toggleSidebar()}
          >
            close
          </Icon>
        </button>
      </div>

      <Item onClick={() => history.push("/")}>Home</Item>
      <Item onClick={() => history.push(Paths.movieTicket)}>
        Buy movie ticket
      </Item>
    </animated.div>
  );
}

export default Sidebar;
export { Sidebar, useSidebar };
