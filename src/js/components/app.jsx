import React from "react";
import ReactDOM from "react-dom";
import Sidebar from './sidebar.jsx';
const axios = require('axios');
import styled from "styled-components";

const Titled =  styled.h1`
  color: red;
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarData: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    axios.get('restaurants/1')
    .then(data => {
      this.setState({
        ...this.state,
        sidebarData: data.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div>
          <Sidebar data={this.state.sidebarData}/>

      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"))