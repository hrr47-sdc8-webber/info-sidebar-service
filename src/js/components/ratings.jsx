import React from 'react';
import styled from 'styled-components';

const ReviewBox = styled.section`
  display: flex;
  flex-direction: row;
  width: 55%;
  max-width: 500px;
  padding-left: 20px;
  justify-content: space-between;
  color: #101820;

  & .rating {
    font-size: 28px !important;
    letter-spacing: .086em;
    padding-bottom: 2px;
    font-weight: bold !important;
    text-align: center;
  }

  & .category {
    font-size: 12px;
    letter-spacing: .125em;
    text-transform: uppercase;
    line-height: 18px;
    text-align: center;
  }

  & .innerBox {
    display: flex;
    flex-direction: column;
    width: 33.3333333%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & .border-middle {
    border-left: 1px solid #d0d2d3;
    width: 1px;
    height: 60px;
  }
`;

const BorderBottom = styled.section`
  width: 51%;
  max-width: 470px;
  height: 1px;
  border-bottom: 1px solid #d0d2d3;
  margin-left: 20px;
`;

function Ratings({food_rating, service_rating, decor_rating}) {
  return (
    <>
      <ReviewBox>
        <div className="innerBox">
          <div className="rating">
            {food_rating}
          </div>
          <div className="category">
            Food
          </div>
        </div>
        <div className="border-middle" />
        <div className="innerBox">
          <div className="rating">
            {decor_rating}
          </div>
          <div className="category">
            Decor
          </div>
        </div>
        <div className="border-middle" />
        <div className="innerBox">
          <div className="rating">
            {service_rating}
          </div>
          <div className="category">
            Service
          </div>
        </div>
      </ReviewBox>
      <BorderBottom />
    </>
  );
}

export default Ratings;
