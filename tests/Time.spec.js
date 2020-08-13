import React from 'react';
import sinon from 'sinon';


import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Time from '../src/js/components/time';


configure({ adapter: new Adapter() });

describe('Time', () =>
  it('should initialize clicked to false', () => {
    const timeProps = {
      opening: '8:30',
      closing: '9:30',
    };
    const app = shallow((<Time {...timeProps} />));
    expect(app.state('clicked')).toEqual(false);
  }),
  it('should run clickHandler', () => {
    const timeProps = {
      opening: '8:30',
      closing: '9:30',
    };
    const app = shallow((<Time {...timeProps} />));
    const spy = jest.spyOn(app.instance(), 'handleClick');
    app.instance().forceUpdate();
    app.find('#icon-testing').simulate('click');
    expect(spy).toHaveBeenCalled();
  }),
  it('should toggle the state when clicked', () => {
    const timeProps = {
      opening: '8:30',
      closing: '9:30',
    };
    const app = shallow((<Time {...timeProps} />));
    expect(app.state('clicked')).toEqual(false);
    app.find('#icon-testing').simulate('click');
    expect (app.state('clicked')).toEqual(true)
  })
);