import React from 'react';
import PropTypes from 'prop-types';

function Phone({ telephoneNumber }) {
  return (
    <a href={`"tel:${telephoneNumber}"`}>{telephoneNumber}</a>
  );
}

Phone.propTypes = {
  telephoneNumber: PropTypes.string.isRequired,
};

export default Phone;
