import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // State 정의
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    // State 변경
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <span>현재 카운트: {this.state.count}</span> <br />
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
