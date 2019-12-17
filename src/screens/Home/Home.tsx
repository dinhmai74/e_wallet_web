import * as React from "react";
import { animated } from "react-spring";
import { Link, RouteComponentProps } from "react-router-dom";
import { SpecialButton } from "components/SpecialButton";
import styles from "./Home.module.scss";
import cx from "classnames"; // Optional classname helper library

import { Button } from "react-bootstrap";
import { Screen } from "components";

interface Props extends RouteComponentProps {
  [rest: string]: any;
}

export const Home: React.FC<Props> = ({ history, location, match }) => {
  return (
    <Screen>
      <p>Hello</p>
    </Screen>
  );
};
