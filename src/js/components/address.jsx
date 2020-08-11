import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
    const { streetAddress, city, state, zipCode } = this.props;

    return (
      <div className="items">
        <FontAwesomeIcon className="icons" icon={faMapMarkerAlt} />
        <Theme>{`  ${streetAddress}, ${city}, ${state}, ${zipCode}, USA`}</Theme>
      </div>
    );
  }
}

Address.propTypes = {
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
};

export default Address;
