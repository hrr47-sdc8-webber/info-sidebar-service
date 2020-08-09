import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6px 0;
`;

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const calendar = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const { clicked, open, close, dayOfTheWeek } = this.props;

    return (
      <Wrapper>
        {clicked
          ? calendar.map((day) => (
            dayOfTheWeek === calendar.indexOf(day)
              ? <b><div>{day} {open}: {close}</div></b>
              : <div>{day} {open}: {close}</div>
          ))
          : <div />}
      </Wrapper>
    );
  }
}

Schedule.propTypes = {
  clicked: PropTypes.bool.isRequired,
  open: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired,
  dayOfTheWeek: PropTypes.number.isRequired,
};

export default Schedule;