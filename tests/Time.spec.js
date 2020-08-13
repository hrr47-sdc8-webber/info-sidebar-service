import React from 'react';
import sinon from 'sinon';


import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Time from '../src/js/components/time';

configure({ adapter: new Adapter() });

describe('Time', () => {
  const timeProps = {
    opening: '8:30',
    closing: '9:30',
  };
  const onButtonClick = sinon.spy();
  const wrapper = mount((<Time {...timeProps} />));
  expect(wrapper.state('clicked')).to.equal(false);

  // wrapper.find('.items').simulate('click');
  // expect(wrapper.state('clicked')).to.equal(true);
});