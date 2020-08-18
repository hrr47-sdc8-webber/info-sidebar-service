import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ratings from './ratings.jsx';

const helpers = require('../../../convenience-functions/parseData.js');

const MainWrapper = styled.section`
  width: 70%;
  max-width: 900px;
  max-height: 475px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  margin-right: 25px;


  & .review-text {
    color: #656666;
    padding-left: 20px;
    letter-spacing: .086em;
    text-transform: uppercase;
    font: 16px/24px 'Calibre-Semibold';
    margin-top: 20px;
  }


  & .written-review {
    font-size: 18px;
    letter-spacing: .013em;
    line-height: 24px;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
  }

  & .horizontal-rule {
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid black;
    margin-bottom: 3px;
    margin-left: 20px;
    width: 90%;
  }

  & .zagat-logo {
    height: 36px;
    width: 36px;
    border: 2px white solid;
    border-radius: 16px;
    margin-top: -25px;
    margin-left: 83.3%;
  }

  & .horizontal-wrapper {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    margin-top: 0px;
  }

  & .name {
    color: #101820;
    padding-top: 25px;
    padding-left: 20px;
    font: 36px/44px 'Calibre-Medium';
    letter-spacing: .086em;
    text-transform: uppercase;
    margin: 0;
  }

  & .describes-restaurant {
    color: #656666;
    font: 15px/24px 'Calibre-Regular';
    letter-spacing: .013em;
    padding-left: 20px;
    margin-top: 0px;
  }

  & .dots {
    color: #656666;
    font-size: 10px;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }

  & .categories {
    color: #656666;
    font: 15px/24px 'Calibre-Regular';
    letter-spacing: .013em;
    margin-bottom: 25px;
    text-decoration: none;
    border-bottom: 1px solid #656666;
    padding-bottom: -20px;
  }

`;

function RestaurantInfo({
  restaurantName, decorRating, serviceRating,
  foodRating, writtenReview, sentence,
  neighborhood, typeOfFood, averagePrice,
}) {
  return (
    <MainWrapper>
      <div className="name">
        {restaurantName}
      </div>
      <div className="describes-restaurant">
        {sentence}
      </div>
      <div className="horizontal-wrapper">
        <a className="categories" href="#">{typeOfFood}</a>
        <div className="dots">•</div>
        <a className="categories" href="#">{neighborhood}</a>
        <div className="dots">•</div>
        <a className="categories" href="#">{helpers.determinesExpense(averagePrice)}</a>
      </div>
      <div className="horizontal-rule" />
      <div className="horizontal-rule" />
      <img className="zagat-logo" alt="The Zagat Logo" src="http://localhost:3001/imgs/z-logo-icon-red.svg" />
      <div className="review-text">THE ZAGAT REVIEW</div>
      <Ratings
        foodRating={foodRating}
        serviceRating={serviceRating}
        decorRating={decorRating}
      />
      <div className="written-review">
        {writtenReview}
      </div>
    </MainWrapper>
  );
}

RestaurantInfo.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  decorRating: PropTypes.string.isRequired,
  serviceRating: PropTypes.string.isRequired,
  foodRating: PropTypes.string.isRequired,
  writtenReview: PropTypes.string.isRequired,
  sentence: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  typeOfFood: PropTypes.string.isRequired,
  averagePrice: PropTypes.number.isRequired,
};

export default RestaurantInfo;
