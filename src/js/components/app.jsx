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
    axios.get(`/0/restaurants${window.location.pathname}`)
      .then((data) => {
        this.setState({
          restaurantID: data.data[0][0].Restaurant_ID,
          restaurantName: data.data[0][0].Restaurant_Name,
          website: data.data[0][0].Website,
          telephoneNumber: data.data[0][0].Telephone,
          streetAddress: data.data[1][0].Street_Address,
          city: data.data[1][0].City,
          state: data.data[1][0].USA_State,
          zipCode: data.data[1][0].Zip_Code,
          opening: data.data[2][0].Start_Hour,
          closing: data.data[2][0].End_Hour,
          foodRating: data.data[3][0].food_rating,
          decorRating: data.data[3][0].decor_rating,
          serviceRating: data.data[3][0].service_rating,
          writtenReview: data.data[3][0].written_review,
          singleSentenceDescriptor: data.data[3][0].singleSentenceDescriptor,
          neighborhood: data.data[3][0].neighborhood,
          typeOfFood: data.data[3][0].typeOfFood,
          averagePrice: data.data[3][0].average_price,
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
