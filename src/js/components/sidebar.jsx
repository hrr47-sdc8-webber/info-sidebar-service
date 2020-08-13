import React from 'react';
import styled, { keyframes } from 'styled-components';
import Time from './time.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Address from './address.jsx';
import Phone from './phone.jsx';
import Website from './website.jsx';
import Directions from './directions.jsx';
import Map from './map.jsx';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let restaurantName;
    let website;
    let telephoneNumber;
    let streetAddress;
    let city;
    let state;
    let zipCode;
    let opening;
    let closing;
    let id;

    const { data } = this.props;

    if (data.length) {
      id = data[0][0].Restaurant_ID;
      restaurantName = data[0][0].Restaurant_Name;
      website = data[0][0].Website;
      telephoneNumber = data[0][0].Telephone;
      streetAddress = data[1][0].Street_Address;
      city = data[1][0].City;
      state = data[1][0].USA_State;
      zipCode = data[1][0].Zip_Code;
      opening = data[2][0].Start_Hour;
      closing = data[2][0].End_Hour;
    }

    return (
      <Wrapper>
        <div className="row">
          <Time opening={opening} closing={closing} id={id}/>
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

Time.propTypes = {
  data: PropTypes.array.isRequired,
};

const rotateUp = keyframes`
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(-180deg);
  }

  50% {
    transform: rotate(-180deg);
  }

  70% {
    transform: rotate(-180deg);
  }

  80% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
`


const Wrapper = styled.section`
  padding: 24px 32px;
  width: 25%;
  max-width: 350px;
  margin-top: 20px;
  border: 1px solid black;
  background: white;
  display: flex;
  flex-direction: column;
  height: 525px;
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
