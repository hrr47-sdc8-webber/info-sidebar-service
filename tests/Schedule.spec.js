import React from 'react';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Schedule from '../src/js/components/schedule';

configure({ adapter: new Adapter() });

describe('Schedule', () => {
  it('hides the days of the week when not clicked', () => {
    const scheduleProps = {
      clicked: false,
      open: '8:30',
      close: '7:30',
      dayOfTheWeek: 2,
      id: Math.random(),
    };
    const schedule = shallow(<Schedule {...scheduleProps} />);
    expect(schedule.contains('Sunday')).toEqual(false);
  });

  it('renders the days of the week when clicked', () => {
    const scheduleProps = {
      clicked: true,
      open: '8:30',
      close: '7:30',
      dayOfTheWeek: 2,
      id: Math.random(),
    };
    const schedule = shallow(<Schedule {...scheduleProps} />);
    expect(schedule.contains('Sunday')).toEqual(true);
  });
});