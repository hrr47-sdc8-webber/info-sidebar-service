import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Theme = styled.a`
  color: black;
  text-decoration: none;
`;


function Website({ website }) {
  return (
    <Theme href={`${website}`}>
      {website}
    </Theme>
  );
}

Website.propTypes = {
  website: PropTypes.string.isRequired,
};

export default Website;
