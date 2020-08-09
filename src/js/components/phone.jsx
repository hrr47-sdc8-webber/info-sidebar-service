import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Theme = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

function Phone({ telephoneNumber }) {
  return (
    <Theme href={`"tel:${telephoneNumber}"`}>
      {telephoneNumber}
    </Theme>
  );
}

Phone.propTypes = {
  telephoneNumber: PropTypes.string.isRequired,
};

export default Phone;
