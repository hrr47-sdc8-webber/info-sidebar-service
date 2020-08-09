import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;



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
      <Wrapper>
        {clicked
          ? calendar.map((day) => (
            <div>{day} {open}: {close}</div>
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
};

export default Schedule;