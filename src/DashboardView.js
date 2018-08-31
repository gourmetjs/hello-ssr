import React from "react";
import earth from "./earth.jpg";

export default class DashboardView extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Dashboard
        </div>
        <div className="card-body">
          <a href="/">Go back to index page</a>
          <div>
            <img src={earth}/>
          </div>
        </div>
      </div>
    );
  }
}
