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
      value: ""
    };
  }

  render() {

    let restaurantName, website, telephoneNumber, streetAddress, city, state, zipCode, opening, closing;

    if (this.props.data.length) {
      restaurantName = this.props.data[0][0].Restaurant_Name;
      website = this.props.data[0][0].Website;
      telephoneNumber = this.props.data[0][0].Telephone;
      streetAddress = this.props.data[1][0].Street_Address;
      city = this.props.data[1][0].City;
      state = this.props.data[1][0].USA_State;
      zipCode = this.props.data[1][0].Zip_Code;
      opening = this.props.data[2][0].Start_Hour;
      closing = this.props.data[2][0].End_Hour;
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

export default Sidebar;
