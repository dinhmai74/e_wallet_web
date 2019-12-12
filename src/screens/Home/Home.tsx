import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { SpecialButton } from "components/SpecialButton";
import styles from "./Home.module.css";
import { Button } from 'react-bootstrap';


interface Props extends RouteComponentProps {
  [rest: string]: any;
}

export const Home: React.FC<Props> = ({ history, location, match }) => {
  return (
    <div>
      <div className="text__b1--primary">home</div>
      <Link to="/about">go to about</Link>
      <Button
        onClick={() => {
          // api call
          // change to the about page
          history.push("/about");
        }}
      >
        click me to go to about
      </Button>
      <SpecialButton />
    </div>
  );
};
