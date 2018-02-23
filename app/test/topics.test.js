import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { FlatList } from 'react-native';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Topics from '../components/topics';
import Votes from '../components/votes';

const props = {
  fetchTopicsList: jest.fn(),
  rowLimit: 20,
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

  it('it should render at most 20 rows', () => {
    const topic = {
      name: 'Just a topic',
      votes: 0
    };
    for (let i=0; i<20; i++){
      props.topics.push(topic);
    }
    const wrapper = mount(<Topics {...props}/>);
    expect(wrapper.find(FlatList).props().data).to.have.length(20);
  });
});
