import React from 'react';
import PropTypes from 'prop-types';

function Website({ website }) {
  return (
    <a href={`${website}`}>{website}</a>
  );
}

Website.propTypes = {
  website: PropTypes.string.isRequired,
};

export default Website;
