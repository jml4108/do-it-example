import React, { Component } from "react";

class MyComponent extends React.Component {
  componentDidUpdate() {
    console.log("MyComponent 새로고침");
  }
  render() {
    return null;
  }
}

class PureComponent extends React.PureComponent {
  componentDidMount() {
    console.log("MyPureComponent 새로고침");
  }
  render() {
    return null;
  }
}

class TestApp extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = [{ name: "Park" }, { name: "Lee" }];
    this.state = { version: 0 };
    // this.handleClick = this.
  }
  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = "컴소";
      this.setState({ version: 1 });
    }, 200);
    setTimeout(() => {
      this.listValue = [{ name: "컴소" }, { name: "Lee" }];
      this.setState({ version: 2 });
    }, 500);
  }
  render() {
    return (
      <div className="body">
        <MyComponent value={this.listValue} />
        <PureComponent value={this.listValue} />
        <button onClick={this.handleClick}>버튼</button>
      </div>
    );
  }
}

export default TestApp;
