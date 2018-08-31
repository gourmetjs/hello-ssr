import React from "react";

export default class IndexView extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Index
        </div>
        <div className="card-body">
          <p>Hello, world!</p>
          <a href="/dashboard">Go to dashboard</a>
        </div>
      </div>
    );
  }
}
