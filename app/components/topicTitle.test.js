import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { TextInput } from 'react-native';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TopicTitle from '../components/topicTitle';
import Votes from '../components/votes';

describe('<TopicTitle />', () => {
  it('it should render max 255 characters', () => {
    const wrapper = mount(<TopicTitle />);
    expect(wrapper.find(TextInput).first().props().maxLength).to.equal(255);
  });
});
