import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

import Time from './time.jsx';
import Address from './address.jsx';
import Phone from './phone.jsx';
import Website from './website.jsx';
import Directions from './directions.jsx';
import Map from './map.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    });
  }

  render() {
    const {
      RestaurantID,
      restaurantName,
      website,
      telephoneNumber,
      streetAddress,
      city,
      state,
      zipCode,
      opening,
      closing,
    } = this.props;

    const {
      clicked,
    } = this.state;

    return (
      <Wrapper clicked={clicked}>
        <div id="inner">
          <div className="row">
            <Time
              opening={opening}
              closing={closing}
              id={RestaurantID}
              handleClick={this.handleClick}
              clicked={clicked}
            />
          </div>
          <div className="row">
            <Address
              restaurantName={restaurantName}
              streetAddress={streetAddress}
              city={city}
              state={state}
              zipCode={zipCode}
            />
          </div>
          <div className="row">
            <Phone telephoneNumber={telephoneNumber} />
          </div>
          <div className="row">
            <Website website={website} />
          </div>
          <div className="row">
            <Directions streetAddress={streetAddress} city={city} state={state} zipCode={zipCode} />
          </div>
          <div className="row lastRow">
            <Map streetAddress={streetAddress} city={city} state={state} zipCode={zipCode} />
          </div>
        </div>
      </Wrapper>
    );
  }
}

Sidebar.propTypes = {
  RestaurantID: PropTypes.number.isRequired,
  restaurantName: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  telephoneNumber: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  opening: PropTypes.string.isRequired,
  closing: PropTypes.string.isRequired,
};

const rotateUp = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-180deg);
  }
`;

const rotateDown = keyframes`
  0% {
    transform: rotate(-180deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const animationDown = css`
  ${rotateDown} 250ms linear
`;

const animationUp = css`
  ${rotateUp} 250ms linear
`;

const Wrapper = styled.section`

  @media (max-width: 960px) {
    width: auto;
    margin-left: 40px;
    margin-right: 40px;
    max-height: ${(props) => (props.clicked ? '400px' : '230px')}
  }
  @media (max-width: 600px) {
    max-height: 600px;
    padding-right:32px;
  }
  @media (min-width: 960px) {
    padding-left: 32px;
    max-width: 365px;
    padding-bottom: 140px;
    width: 25%;
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
    top: 0px;
    bottom: 100px;
    margin-top: 20px;
    height: 1200px;
  }
  margin-right: 40px;
  background: #FAFAFA;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-weight: 350;
  font-size: 13px;

  & #inner {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    background: white;
    @media (min-width: 960px) {
      padding: 20px;
    }
  }

  & #inner .row {
    width: 100%;
    text-decoration: none;
    margin-top: 13px;
    margin-bottom: 13px;
    font: 10px;
    letter-space: .013em;
    @media (max-width: 960px) {
      width: 50%;
      padding-right: 0px;
      padding-top: 0px;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  & #inner .row .items {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 5%;
  }

  & #inner .row .items .status {
    font-size: 13px;
    margin: 0px;
  }

  & #inner .row .items .icons {
    margin-right: 24px;

  }

  & #inner .row .items .arrow {
    display: inline-block;
    margin-left: 5px;
    animation: ${(props) => (props.clicked ? animationUp : animationDown)};
    animation-fill-mode: forwards;
  }

  & #inner .lastRow {
    @media (max-width: 960px) {
      position: -webkit-sticky;
      position: sticky;
      bottom: 800px;
      left: 500px;
    }

    @media (max-width: 600px) {
      position: static;
      width: 100%;
  }


`;

export default Sidebar;
