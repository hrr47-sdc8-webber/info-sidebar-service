import React from 'react';
import PropTypes from 'prop-types';

const helpers = require('../../../convenience-functions/parseData.js');

function Directions({streetAddress, city, state, zipCode }) {
  const collectedProps = [];
  let queryString = null;
  if (streetAddress) {
    collectedProps.push(streetAddress, city, state, zipCode);
    queryString = helpers.convertForGoogleDirections(collectedProps);
  }

  return (
    <a href={queryString} target="_blank" rel="noreferrer">Get Directions</a>
  );
}

Directions.propTypes = {
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
};

export default Directions;
