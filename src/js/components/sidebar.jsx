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
      clicked: false,
      animate: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
      animate: true,
    });
    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, 350);
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
      animate,
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
              animate={animate}
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

  @media (max-width: 960px) {
    width: auto;
    margin-left: 40px;
    margin-right: 40px;
    padding-left: 72px;
    max-height: ${(props) => (props.clicked ? '400px' : '230px')}
  }
  @media (max-width: 600px) {
    max-height: 600px;
    padding-right:32px;
    padding-left: 20px;
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
    height: 1000px;
  }
  margin-right: 40px;
  background: white;



  & #inner {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;

  }

  & #inner .row {
    width: 100%;
    text-decoration: none;
    margin-top: 13px;
    margin-bottom: 13px;
    font: 13.5px 'Calibre-Regular';
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
    font-size: 15px;
    margin: 0px;
  }

  & #inner .row .items .icons {
    margin-right: 24px;

  }

  & #inner .row .items .arrow {
    display: inline-block;
    margin-left: 5px;
    animation: ${rotateUp} 700ms linear infinite;
    animation-play-state: paused;
  }

  & #inner .row .items .flip {
    animation-play-state: running;
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
