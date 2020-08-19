import React from 'react';
import PropTypes from 'prop-types';

const helpers = require('../../../convenience-functions/parseData.js');

function Map({streetAddress, city, state, zipCode }) {
  const collectedProps = [];
  let queryString = null;
  if (streetAddress) {
    collectedProps.push(streetAddress, city, state, zipCode);
    queryString = helpers.convertForGoogleMaps(collectedProps);
  }

  return (
    <iframe
      title="restaurantMap"
      width="100%"
      height="175%"
      frameBorder="0"
      cookieFlags="samesite=none;secure"
      style={{ border: '0' }}
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDPIUHkZ4FNCluRm_Vbm-Hp3pjqg42-Anw
      &q=${queryString}`}
      allowFullScreen
    />
  );
}

Map.propTypes = {
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
};

export default Map;
