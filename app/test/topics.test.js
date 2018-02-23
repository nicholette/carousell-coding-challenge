import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Topics from '../components/topics';

const props = {
  fetchTopicsList: jest.fn(),
  topics: [
    {
      name: 'THE HOTTEST TOPIC IN TOWN',
      upvotes: 100,
      downvotes: 21,
    },
    {
      name: 'THE COLDEST TOPIC IN TOWN',
      upvotes: 1,
      downvotes: 100,
    },
  ]
};

describe('<Topics />', () => {
  it('it should render 2 rows', () => {
    const wrapper = mount(<Topics {...props}/>);
    expect(wrapper.find(Text)).to.have.length(2);
  });
});
