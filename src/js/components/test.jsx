import React, { Component } from "react";
import ReactDOM from "react-dom";

class HelloWorld extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default HelloWorld;

ReactDOM.render(<HelloWorld />, document.getElementById("root"))