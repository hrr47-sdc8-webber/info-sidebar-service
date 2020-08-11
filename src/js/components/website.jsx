import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';


const Theme = styled.a`
  color: black;
  text-decoration: none;
  padding: 6px 0;
  margin: 0px 0px 8px;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }

  & .icons {
    margin-right: 24px;
  }
`;

function Website({ website }) {
  return (
    <Theme href={`${website}`}>
      <FontAwesomeIcon className="icons" icon={faColumns} />
      {website}
    </Theme>
  );
}

Website.propTypes = {
  website: PropTypes.string.isRequired,
};

export default Website;
