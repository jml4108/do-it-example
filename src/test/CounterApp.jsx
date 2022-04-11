import React, { Component } from "react";
import Counter from "./Counter";
import NewCounter from "./NewCounter";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <NewCounter count={this.state.newCount} />
        </div>
        <button onClick={this.resetCount} />
      </div>
    );
  }
}

export default CounterApp;
