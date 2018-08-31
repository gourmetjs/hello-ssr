import React from "react";
import loadable from "@gourmet/react-loadable";

export default class DashboardLoadable extends React.Component {
  static routeLoadable = loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ "./DashboardView")
  });

  render() {
    return <DashboardLoadable.routeLoadable {...this.props}/>;
  }
}
