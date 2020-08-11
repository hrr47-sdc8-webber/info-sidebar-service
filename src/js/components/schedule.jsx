import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  line-height: 150%;
`;

const InnerWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

const DotsWrapper = styled.section`
  overflow: hidden;
  flex: 1;
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
    const dots = '.......................................................................................';

    return (
      <Wrapper>
        {clicked
          ? calendar.map((day) => (
            dayOfTheWeek === calendar.indexOf(day)
              ? (
                <b>
                  <InnerWrapper>
                    <div>{day}</div><DotsWrapper>{dots}</DotsWrapper><div>{open}: {close}</div>
                  </InnerWrapper>
                </b>
              )
              : (
                <InnerWrapper>
                  <div>{day}</div><DotsWrapper>{dots}</DotsWrapper><div>{open}: {close}</div>
                </InnerWrapper>
              )
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
