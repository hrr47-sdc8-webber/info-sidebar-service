import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 150%;
  padding: ${(props) => (props.clicked ? '10px 0px' : '0px')};
`;

const InnerWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-left: 37px;
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
    const { clicked, open, close, dayOfTheWeek, id } = this.props;
    const dots = '.......................................................................................';

    return (
      <Wrapper clicked={clicked} >
        {clicked
          ? calendar.map((day) => (
            dayOfTheWeek === calendar.indexOf(day)
              ? (
                <b>
                  <InnerWrapper key={Math.random()}>
                    <div>
                      {day}</div><DotsWrapper>{dots}</DotsWrapper><div>{open}: {close}
                    </div>
                  </InnerWrapper>
                </b>
              )
              : (
                <InnerWrapper key={Math.random()}>
                  <div key={id}>
                    {day}</div><DotsWrapper>{dots}</DotsWrapper><div>{open}: {close}
                    </div>
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
  id: PropTypes.number.isRequired,
};

export default Schedule;
