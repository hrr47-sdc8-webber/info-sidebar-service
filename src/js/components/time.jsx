import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Schedule from './schedule.jsx';
import PropTypes from 'prop-types';

const helpers =  require('../../../convenience-functions/parseData.js');

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    });
  }

  render() {
    let showOpenStatus = null;
    let convertedStart = null;
    let convertedEnd = null;
    let dayOfTheWeek = null;

    const { opening, closing } = this.props;
    const { clicked } = this.state;

    if (opening) {
      const today = new Date();
      const timeNow = helpers.turnsClockTimeIntoTotalMinutes(`${today.getHours()}:${today.getMinutes()}`);
      dayOfTheWeek = today.getDay();
      const startTime = helpers.turnsClockTimeIntoTotalMinutes(opening);
      const endTime = helpers.turnsClockTimeIntoTotalMinutes(closing);
      convertedStart = helpers.convertsFormOfTime(opening);
      convertedEnd = helpers.convertsFormOfTime(closing);

      if (timeNow >= startTime && timeNow <= endTime) {
        showOpenStatus = <h1 onClick={this.handleClick}>Open Now • {convertedStart} - {convertedEnd}</h1>;
      } else {
        showOpenStatus = <h1 onClick={this.handleClick}>Closed Now • {convertedStart} - {convertedEnd}</h1>;
      }
    }

    return (
      <div>
        <FontAwesomeIcon icon={faClock} />
        {showOpenStatus}
        <Schedule
          clicked={clicked}
          open={convertedStart}
          close={convertedEnd}
          dayOfTheWeek={dayOfTheWeek}
        />
      </div>


    )
  }
}

Time.propTypes = {
  opening: PropTypes.string.isRequired,
  closing: PropTypes.string.isRequired,
};

export default Time;