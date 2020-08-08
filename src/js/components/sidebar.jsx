import React from 'react';
import styled from 'styled-components';
import Time from './time.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Address from './address.jsx';
import Phone from './phone.jsx';
import Website from './website.jsx';
import Directions from './directions.jsx';

const Wrapper = styled.section`
  padding: 4em;
  width: 400px;
  background: white;
  display: flex;
  flex-direction: column;
`;

const Row = styled.section`
  color: #101820;
  font: 15px 'Calibre-Regular';
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
        <Phone telephoneNumber={telephoneNumber} />
        <Website website={website} />
        <Directions streetAddress={streetAddress} city={city} state={state} zipCode={zipCode} />

      </Wrapper>
    );
  }
}

export default Sidebar;