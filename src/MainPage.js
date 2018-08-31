import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {hot} from "react-hot-loader";
import {ActiveRoute} from "@gourmet/react-i80";
import {css} from "emotion";

const cssContainer = css`
  max-width: 25em;
  padding: 5em 0;
`;

class MainPage extends React.Component {
  render() {
    return (
      <div className={"container " + cssContainer}>
        <ActiveRoute/>
      </div>
    );
  }
}

export default hot(module)(MainPage);
