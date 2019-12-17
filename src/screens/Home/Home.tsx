import * as React from "react";
import { animated } from "react-spring";
import { Link, RouteComponentProps } from "react-router-dom";
import { SpecialButton } from "components/SpecialButton";
import styles from "./Home.module.scss";
import cx from "classnames"; // Optional classname helper library

import { Button } from "react-bootstrap";
import { Sidebar, useSidebar, Modal, AppButton } from "components";

interface Props extends RouteComponentProps {
  [rest: string]: any;
}

export const Home: React.FC<Props> = ({ history, location, match }) => {
  // Sidebar
  const {
    isMobile,
    sidebarWidth,
    toggleSidebar,
    useDragMain,
    useSidebarLayout,
    useSidebarStyle,
    useMainStyle
  } = useSidebar();

  useSidebarLayout();
  const sidebarStyle = useSidebarStyle();
  const mainStyle = useMainStyle();
  const bindMain = useDragMain();

  // Modal
  const [showDialog, setShowDialog] = React.useState(false);
  const close = () => setShowDialog(false);
  const toggleModal = () => setShowDialog(!showDialog);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Sidebar
        style={{
          width: sidebarWidth,
          ...sidebarStyle
        }}
      />

      <animated.div
        {...(isMobile ? bindMain() : {})}
        className="flex-1 p-16"
        style={mainStyle}
      >
        <p className="color__primary">Hello, World!</p>
        <AppButton onClick={toggleModal}>Toggle modal</AppButton>

        <button className="btn btn-primary" onClick={() => toggleSidebar()}>
          Toggle sidebar
        </button>

        <Modal showDialog={showDialog} close={close}>
          <p>
            The overlay styles are a white fade instead of the default black
            fade.
          </p>
          <button className="btn btn-primary my-4" onClick={close}>
            Very nice.
          </button>
        </Modal>

        <p>Hello</p>
      </animated.div>
    </div>
  );
};
