import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Sidebar from './sidebar.jsx';

const axios = require('axios');

const BodyWrapper = styled.section`
  height: 2000px;
  background-color: rgb(250,250,250);
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarData: [],
      restaurantName: '',
      website: '',
      telephoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: null,
      opening: '',
      closing: '',
      food_rating: '',
      decor_rating: '',
      service_rating: '',
      written_review: '',
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
          restaurantName: data.data[0][0].Restaurant_Name,
          website: data.data[0][0].Website,
          telephoneNumber: data.data[0][0].Telephone,
          streetAddress: data.data[1][0].Street_Address,
          city: data.data[1][0].City,
          state: data.data[1][0].USA_State,
          zipCode: data.data[1][0].Zip_Code,
          opening: data.data[2][0].Start_Hour,
          closing: data.data[2][0].End_Hour,
          food_rating: data.data[3][0].food_rating,
          decor_rating: data.data[3][0].decor_rating,
          service_rating: data.data[3][0].service_rating,
          written_review: data.data[3][0].written_review,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { sidebarData } = this.state;
    return (
      <BodyWrapper>
        <Sidebar data={sidebarData} />
        <RestaurantInfo restaurantName={restaurantName} decor_rating={decor_rating} service_rating={service_rating} food_rating={food_rating} written_review={written_review} />
      </BodyWrapper>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
