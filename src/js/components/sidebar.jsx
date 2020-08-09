import React from 'react';
import styled from 'styled-components';
import Time from './time.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Address from './address.jsx';
import Phone from './phone.jsx';
import Website from './website.jsx';
import Directions from './directions.jsx';
import Map from './map.jsx';
import PropTypes from 'prop-types';


const Wrapper = styled.section`
  padding: 1em;
  width: 25%;
  border: 1px solid black;
  margin: 0 auto;
  background: white;
  display: flex;
  flex-direction: column;
  height: 610px;
`;

const Row = styled.section`
  width: 100%;
  text-decoration: none;
  margin-bottom: 8px;
  color: #101820;
  font: 15px 'Calibre-Regular';
  letter-space: .013em;
`;

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

    const { data } = this.props;

    if (data.length) {
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
        <Row>
          <Time opening={opening} closing={closing} />
        </Row>
        <Row>
          <Address streetAddress={streetAddress} city={city} state={state} zipCode={zipCode} />
        </Row>
        <Row>
          <Phone telephoneNumber={telephoneNumber} />
        </Row>
        <Row>
          <Website website={website} />
        </Row>
        <Row>
          <Directions streetAddress={streetAddress} city={city} state={state} zipCode={zipCode} />
        </Row>
        <Row>
          <Map streetAddress={streetAddress} city={city} state={state} zipCode={zipCode} />
        </Row>
      </Wrapper>
    );
  }
}

Time.propTypes = {
  data: PropTypes.array.isRequired,
};


export default Sidebar;
