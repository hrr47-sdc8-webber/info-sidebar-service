import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Schedule from './schedule.jsx';
import styled from 'styled-components';

const helpers = require('../../../convenience-functions/parseData.js');

function Time(props) {
  let showOpenStatus = null;
  let convertedStart = null;
  let convertedEnd = null;
  let dayOfTheWeek = null;

  const {
    opening,
    closing,
    id,
    clicked,
    animate,
    handleClick
  } = props;
  // const { clicked, animate } = this.state;

  if (opening) {
    const today = new Date();
    const timeNow = helpers.turnsClockTimeIntoTotalMinutes(`${today.getHours()}:${today.getMinutes()}`);
    dayOfTheWeek = today.getDay();
    const startTime = helpers.turnsClockTimeIntoTotalMinutes(opening);
    const endTime = helpers.turnsClockTimeIntoTotalMinutes(closing);
    convertedStart = helpers.convertsFormOfTime(opening);
    convertedEnd = helpers.convertsFormOfTime(closing);

    if (timeNow >= startTime && timeNow <= endTime) {
      showOpenStatus = <h1 className="status" onClick={() => {handleClick()}}>Open Now • {convertedStart} - {convertedEnd}    </h1>;
    } else {
      showOpenStatus = <h1 className="status" onClick={() => {handleClick()}}>Closed Now • {convertedStart} - {convertedEnd}    </h1>;
    }
  }

  return (
    <>
      <div className="items">
        <FontAwesomeIcon
          id="icon-testing"
          className="icons"
          icon={faClock}
          onClick={() => handleClick()}
        />
        { showOpenStatus}
        <FontAwesomeIcon
          icon={faCaretDown}
          onClick={() => handleClick()}
          className={animate ? 'arrow flip' : 'arrow'}
          // onAnimationEnd={() => this.setState({ animate: false })}
        />
      </div>
      <Schedule
        clicked={clicked}
        open={convertedStart}
        close={convertedEnd}
        dayOfTheWeek={dayOfTheWeek}
        id={id}
        key={1}
      />
    </>
  );
}

Time.propTypes = {
  opening: PropTypes.string.isRequired,
  closing: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  clicked: PropTypes.bool.isRequired,
  animate: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Time;
