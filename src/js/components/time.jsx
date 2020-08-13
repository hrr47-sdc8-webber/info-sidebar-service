import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Schedule from './schedule.jsx';
import styled from 'styled-components';



const helpers = require('../../../convenience-functions/parseData.js');

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      animate: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
      animate: true,
    });
    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, 350);
  }


  render() {
    let showOpenStatus = null;
    let convertedStart = null;
    let convertedEnd = null;
    let dayOfTheWeek = null;

    const { opening, closing } = this.props;
    const { clicked, animate } = this.state;

    if (opening) {
      const today = new Date();
      const timeNow = helpers.turnsClockTimeIntoTotalMinutes(`${today.getHours()}:${today.getMinutes()}`);
      dayOfTheWeek = today.getDay();
      const startTime = helpers.turnsClockTimeIntoTotalMinutes(opening);
      const endTime = helpers.turnsClockTimeIntoTotalMinutes(closing);
      convertedStart = helpers.convertsFormOfTime(opening);
      convertedEnd = helpers.convertsFormOfTime(closing);

      if (timeNow >= startTime && timeNow <= endTime) {
        showOpenStatus = <h1 className="status" onClick={() => {this.handleClick()}}>Open Now • {convertedStart} - {convertedEnd}    </h1>;
      } else {
        showOpenStatus = <h1 className="status" onClick={() => {this.handleClick()}}>Closed Now • {convertedStart} - {convertedEnd}    </h1>;
      }
    }

    return (
    <>
      <div className="items">
        <FontAwesomeIcon
          className="icons"
          icon={faClock}
          onClick={() => this.handleClick()}
        />
        { showOpenStatus}
        <FontAwesomeIcon
          icon={faCaretDown}
          onClick={() => this.handleClick()}
          className={animate ? 'arrow flip' : 'arrow' }
          onAnimationEnd={() => this.setState({ animate: false })}
        />
      </div>
      <Schedule
        clicked={clicked}
        open={convertedStart}
        close={convertedEnd}
        dayOfTheWeek={dayOfTheWeek}
      />
    </>
    );
  }
}

Time.propTypes = {
  opening: PropTypes.string.isRequired,
  closing: PropTypes.string.isRequired,
};

export default Time;
