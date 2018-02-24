import React from 'react';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Votes from '../components/votes';

describe('<Votes />', () => {
  it('it should show full number for less than 1000 votes', () => {
    const wrapper = mount(<Votes votes={999} />);
    expect(wrapper.find(Text).first().text()).to.equal('999');
  });

  it('it should show truncated number for more than 1000 votes', () => {
    const wrapper = mount(<Votes votes={-1999} />);
    expect(wrapper.find(Text).first().text()).to.equal('-1.9k');
  });
});
