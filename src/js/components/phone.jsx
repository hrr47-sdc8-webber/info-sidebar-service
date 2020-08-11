import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Theme = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }

  & .icons {
    margin-right: 24px;
  }
`;

function Phone({ telephoneNumber }) {
  return (
    <Theme href={`"tel:${telephoneNumber}"`}>
      <FontAwesomeIcon className="icons" icon={faPhone} />
      {telephoneNumber}
    </Theme>
  );
}

Phone.propTypes = {
  telephoneNumber: PropTypes.string.isRequired,
};

export default Phone;
