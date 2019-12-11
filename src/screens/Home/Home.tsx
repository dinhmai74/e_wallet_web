import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { SpecialButton } from "components/SpecialButton";
import styles from './Home.module.css'

interface Props extends RouteComponentProps {
  [rest: string]: any;
}

export const Home: React.FC<Props> = ({ history, location, match }) => {
  return (
    <div>
      <div>home</div>
      <Link to="/about">go to about</Link>
      <button
        onClick={() => {
          // api call
          // change to the about page
          history.push("/about");
        }}
      >
        click me to go to about
      </button>
      <SpecialButton />
    </div>
  );
};
