import React from "react";
import ReactDOM from "react-dom";
import Sidebar from './sidebar.jsx';
const axios = require('axios');
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarData: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('restaurants/1')
      .then((data) => {
        this.setState({
          sidebarData: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { sidebarData } = this.state;
    return (
      <div>
        <Sidebar data={sidebarData} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
