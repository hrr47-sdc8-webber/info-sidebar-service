import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const helpers = require('../../../convenience-functions/parseData.js');

const grow = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
    z-index: -1;
  }
  to {
    transform: scale(1);
    opacity: 1;
    z-index: 600;
  }
`;

const shrink = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
    z-index: 2;
  }
  to {
    transform: scale(0);
    opacity: 0;
    z-index: -1;
  }
`;

const growMixin = css`
  ${grow} 0.35s linear
`;

const shrinkMixin = css`
  ${shrink} 0.5s linear
`;

const Backdrop = styled.section`
  position: fixed;
  background-color: rgba(16,24,32,.95);
  box-sizing: border-box;
  padding: 0 40px 40px;
  text-align: center;
  z-index: 600;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  overflow: hidden;
  color: #FFFFFF;
  font-size: 18px;
  animation: ${(props) => (props.clicked ? growMixin : shrinkMixin)}

  & iframe {
    z-index: 601;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 10px;
  right: 25px;
  z-index: 602;
  background-color: rgb(16, 24, 32);
  color: #FFFFFF;
  border: none;
  background: none;
  padding: 0;
  outline: none;
  font-size: 20px;
  & :hover {
    background-color: #FFFFFF;
    color: rgb(16, 24, 32);
  }
`;

function Modal({
  handleClick, restaurantName, streetAddress, city, state, zipCode, clicked, open
}) {
  const collectedProps = [];
  let queryString = null;
  if (streetAddress) {
    collectedProps.push(streetAddress, city, state, zipCode);
    queryString = helpers.convertForGoogleMaps(collectedProps);
  }

  return (
    <div>
      {clicked
      && (
        <Backdrop onClick={() => handleClick()} clicked={open}>
          <h1>{restaurantName}</h1>
          <Button>
            X
          </Button>
          <iframe
            title="restaurantModal"
            width="100%"
            height="175%"
            cookieFlags="samesite=none;secure"
            frameBorder="0"
            style={{ 'z-index': '601' }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDPIUHkZ4FNCluRm_Vbm-Hp3pjqg42-Anw
            &q=${queryString}`}
            allowFullScreen
          />
        </Backdrop>
      )}
    </div>
  );
}

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  restaurantName: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Modal;
