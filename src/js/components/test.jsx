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

export default Form;

ReactDOM.render(<HeloWorld />, document.getElementById("root"))