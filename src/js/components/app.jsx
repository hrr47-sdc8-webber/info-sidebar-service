import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Sidebar from './sidebar.jsx';
import RestaurantInfo from './restaurantInfo.jsx';

const axios = require('axios');

const BodyWrapper = styled.section`
  width: 100%;
  background-color: rgb(250,250,250);
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    flex-direction: row;
  }
  justify-content: center;

  & #hr {
    @media (max-width: 960px) {
      width: 100%;
      color: DCDCDC;
      margin-top: 24px;
      margin-bottom: 24px;
    }
    @media (min-width: 960px) {
      display: none;
    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantName: '',
      website: '',
      telephoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: null,
      opening: '',
      closing: '',
      foodRating: '',
      decorRating: '',
      serviceRating: '',
      writtenReview: '',
      singleSentenceDescriptor: '',
      neighborhood: '',
      typeOfFood: '',
      averagePrice: null,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`http://localhost:3002/restaurants`)
      .then(({data}) => {
        console.log(data);
        this.setState({
          restaurantName: data.companyName,
          website: data.website,
          telephoneNumber: data.phone,
          streetAddress: data.streetAddress,
          city: data.city,
          state: data.state,
          zipCode: data.zip,
          opening: data.start,
          closing: data.end,
          foodRating: data.scoreOne,
          decorRating: data.scoreTwo,
          serviceRating: data.scoreThree,
          writtenReview: data.writtenReview,
          singleSentenceDescriptor: data.singleSentenceDescriptor,
          neighborhood: data.neighborhood,
          typeOfFood: data.typeOfFood,
          averagePrice: data.averagePrice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      restaurantName, restaurantID, website, telephoneNumber, streetAddress,
      city, state, zipCode, opening, closing, foodRating, decorRating,
      serviceRating, writtenReview, singleSentenceDescriptor,
      neighborhood, typeOfFood, averagePrice,
    } = this.state;
    return (
      <BodyWrapper>
        <RestaurantInfo
          restaurantName={restaurantName}
          decorRating={decorRating}
          serviceRating={serviceRating}
          foodRating={foodRating}
          writtenReview={writtenReview}
          sentence={singleSentenceDescriptor}
          neighborhood={neighborhood}
          typeOfFood={typeOfFood}
          averagePrice={averagePrice}
        />
        <div id="hr">
          <hr />
        </div>
        <Sidebar
          restaurantID={restaurantID}
          restaurantName={restaurantName}
          website={website}
          telephoneNumber={telephoneNumber}
          streetAddress={streetAddress}
          city={city}
          state={state}
          zipCode={zipCode}
          opening={opening}
          closing={closing}
        />
      </BodyWrapper>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('restaurantInfo'));
