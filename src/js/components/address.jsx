import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal.jsx';

const Theme = styled.a`
  color: black;
  text-decoration: none;
  padding-bottom: 5px;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.delayedHandleClick = this.delayedHandleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    });
  }

  delayedHandleClick() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
    setTimeout(this.handleClick, 400);
  }

  render() {
    const { streetAddress, city, state, zipCode, restaurantName } = this.props;
    const { clicked, open } = this.state;

    return (
      <div className="items">
        <Modal
          open={open}
          handleClick={this.delayedHandleClick}
          restaurantName={restaurantName}
          streetAddress={streetAddress}
          city={city}
          state={state}
          zipCode={zipCode}
          clicked={clicked}
        />
        <FontAwesomeIcon
          onClick={() => { this.delayedHandleClick(); }}
          className="icons"
          icon={faMapMarkerAlt}
          style={{ color: '#b70038' }}
        />
        <Theme onClick={() => { this.delayedHandleClick(); }}>{`  ${streetAddress}, ${city}, ${state}, ${zipCode}, USA`}</Theme>
      </div>
    );
  }
}

Address.propTypes = {
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  restaurantName: PropTypes.string.isRequired,
};

export default Address;
