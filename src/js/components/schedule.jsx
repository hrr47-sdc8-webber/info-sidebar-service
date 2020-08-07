import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
const helpers =  require('../../../convenience-functions/parseData.js');


class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }





  render() {
    let showOpenStatus = null;


    if (this.props.opening) {
      let today = new Date();
      let timeNow = helpers.turnsClockTimeIntoTotalMinutes(today.getHours()+`:`+today.getMinutes())
      let startTime = helpers.turnsClockTimeIntoTotalMinutes(this.props.opening);
      let endTime = helpers.turnsClockTimeIntoTotalMinutes(this.props.closing);

      if (timeNow >= startTime && timeNow <= endTime) {
        showOpenStatus = <h1>Open Now</h1>;
      } else {
        showOpenStatus = <h1>Closed Now</h1>;
      }
    }


    return (
      <div>
        <FontAwesomeIcon icon={faClock} />
        {showOpenStatus}
      </div>


    )
  }
}

export default Schedule;