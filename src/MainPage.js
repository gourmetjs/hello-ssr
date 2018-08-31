import React from "react";
import {hot} from "react-hot-loader";
import {ActiveRoute} from "@gourmet/react-i80";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <ActiveRoute/>
      </div>
    );
  }
}

export default hot(module)(MainPage);
