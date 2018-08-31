import React from "react";
import loadable from "@gourmet/react-loadable";

export default class IndexLoadable extends React.Component {
  static routeLoadable = loadable({
    loader: () => import(/* webpackChunkName: "index" */ "./IndexView")
  });

  render() {
    return <IndexLoadable.routeLoadable {...this.props}/>;
  }
}
