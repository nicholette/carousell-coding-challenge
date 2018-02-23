import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import { expect } from 'chai';

import Topics from '../components/topics';
import Votes from '../components/votes';

const props = {
  fetchTopicsList: jest.fn(),
  topics: [
    {
      name: 'THE HOTTEST TOPIC IN TOWN',
      votes: 100
    },
    {
      name: 'THE COLDEST TOPIC IN TOWN',
      votes: -100
    },
  ]
};

describe('<Topics />', () => {
  it('it should render 2 rows', () => {
    const wrapper = mount(<Topics {...props}/>);
    expect(wrapper.find(Votes)).to.have.length(2);
  });
});
