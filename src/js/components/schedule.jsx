import React from 'react';
import PropTypes from 'prop-types';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const calendar = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const { clicked, open, close } = this.props;

    return (
      <div>
        {clicked
          ? calendar.map((day) => (
            `${day} ${open}: ${close}`
          ))
          : <div />}
      </div>
    );
  }
}

Schedule.propTypes = {
  clicked: PropTypes.bool.isRequired,
  open: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired,
};

export default Schedule;