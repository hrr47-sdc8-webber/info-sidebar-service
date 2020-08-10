import React from 'react';
import styled from 'styled-components';
import Ratings from './ratings.jsx';

const MainWrapper = styled.section`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  margin-right: 25px;
`;
const HorizontalWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  margin-top: 0px;
`;
const Name = styled.h1`
  color: #101820;
  padding-top: 25px;
  padding-left: 20px;
  font: 36px/44px 'Calibre-Medium';
  letter-spacing: .086em;
  text-transform: uppercase;
  margin: 0;
`;

const DescribeRestaurant = styled.h2`
  color: #656666;
  font: 15px/24px 'Calibre-Regular';
  letter-spacing: .013em;
  padding-left: 20px;
  margin-top: 0px;
`;

const Anchors = styled.a`
  color: #656666;
  font: 15px/24px 'Calibre-Regular';
  letter-spacing: .013em;
  margin-right: 6px;
`;

const RestaurantDescription = styled.h3`
  font-size: 22px;
  letter-spacing: .004em;
  line-height: 32px;
  color: #101820;
  font: 15px/20px 'Calibre-Regular';
  padding-left: 20px;
  padding-right: 20px;
`;

function RestaurantInfo({
  restaurantName, decor_rating, service_rating,
  food_rating, written_review, sentence,
  neighborhood, typeOfFood, averagePrice
}) {
  return (
    <MainWrapper>
      <Name>{restaurantName}</Name>
      <DescribeRestaurant>{sentence}</DescribeRestaurant>
      <HorizontalWrapper>
        <Anchors href="#">{sentence}</Anchors>
        •
        <Anchors href="#">{neighborhood}</Anchors>
        •
        <Anchors href="#">{`${averagePrice}`}</Anchors>
      </HorizontalWrapper>
      <br />
      <Ratings
        food_rating={food_rating}
        service_rating={service_rating}
        decor_rating={decor_rating}
      />
      <RestaurantDescription>{written_review}</RestaurantDescription>
    </MainWrapper>
  );
}

export default RestaurantInfo;

