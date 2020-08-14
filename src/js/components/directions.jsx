import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDirections } from '@fortawesome/free-solid-svg-icons';

const helpers = require('../../../convenience-functions/parseData.js');

const Theme = styled.a`
  color: black;
  text-decoration: none;
  padding: 6px 0;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }

  & .icons {
    margin-right: 24px;
  }
`;

function Directions({
  streetAddress, city, state, zipCode,
}) {
  const collectedProps = [];
  let queryString = null;
  if (streetAddress) {
    collectedProps.push(streetAddress, city, state, zipCode);
    queryString = helpers.convertForGoogleDirections(collectedProps);
  }

  return (
    <Theme href={queryString} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="icons" icon={faDirections} />
      Get Directions
    </Theme>
  );
}

Directions.propTypes = {
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
};

export default Directions;
