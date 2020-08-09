import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Theme = styled.a`
  color: black;
  text-decoration: none;
  padding: 6px 0;
  margin: 0px 0px 8px;
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
