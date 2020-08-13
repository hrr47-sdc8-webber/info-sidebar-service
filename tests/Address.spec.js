import React from 'react';
\

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Address from '../src/js/components/time';

configure({ adapter: new Adapter() });

describe('Address', () =>
  it ('should initialize clicked to false', () => {
    const app = shallow((<Address />));
    expect(app.state('clicked')).toEqual(false)
  }),
  it('should run clickHandler when clicked', () => {
    const app = shallow((<Address />));
    const spy = jest.spyOn(app.instance(), 'handleClick');
    app.instance().forceUpdate();
    app.find('#address-testing').simulate('click');
    expect(spy).toHaveBeenCalled();
  }),
  it('should toggle state when clicked', () => {
    const app = shallow((<Address />));
    expect(app.state('clicked')).toEqual(false);
    app.find('#address-testing').simulate('click');
    expect(app.state('clicked')).toEqual(true);
  })
)

