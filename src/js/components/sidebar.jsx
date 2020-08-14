import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

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
    };
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

    return (
      <Wrapper>
        <div className="row">
          <Time opening={opening} closing={closing} id={RestaurantID} />
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
        <div className="row">
          <Map streetAddress={streetAddress} city={city} state={state} zipCode={zipCode} />
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

  20% {
    transform: rotate(0deg);
  }


  50% {
    transform: rotate(-180deg);
  }

  80% {
    transform: rotate(-180deg);
  }


  100% {
    transform: rotate(0deg);
  }
`;

const Wrapper = styled.section`
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 140px;
  width: 25%;
  max-width: 350px;
  margin-top: 20px;
  border: 1px solid black;
  background: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  // height: 125%;
  position: -webkit-sticky;
  position: sticky;
  top: 50px;

  & .row {
    width: 100%;
    text-decoration: none;
    margin-top: 13px;
    margin-bottom: 13px;
    font: 13.5px 'Calibre-Regular';
    letter-space: .013em;
  }

  & .row .items {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 5%;
  }

  & .row .items .status {
    font-size: 15px;
    margin: 0px;
  }

  & .row .items .icons {
    margin-right: 24px;

  }

  & .row .items .arrow {
    display: inline-block;
    margin-left: 5px;
    animation: ${rotateUp} 700ms linear infinite;
    animation-play-state: paused;
  }

  & .row .items .flip {
    animation-play-state: running;
  }


`;

export default Sidebar;
