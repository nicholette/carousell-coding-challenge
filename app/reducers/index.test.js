import { topicsReducer } from '../reducers';
import { FETCH_TOPICS_LIST } from '../actions';
import { expect } from 'chai';

const mockTopics = [
    {
      name: "THE COLDEST TOPIC IN TOWN",
      votes: -100
    },
    {
      name: "THE HOTTEST TOPIC IN TOWN",
      votes: 100
    }
  ];


describe('Topics Reducer', () => {
  it('should sort topics desc', () => {
    const fetchTopicsList = {
      type: FETCH_TOPICS_LIST,
      topics: mockTopics,
    };
    expect(JSON.stringify(topicsReducer(undefined, fetchTopicsList).topics)).to.equal(
      JSON.stringify([
        {
          name: "THE HOTTEST TOPIC IN TOWN",
          votes: 100
        },
        {
          name: "THE COLDEST TOPIC IN TOWN",
          votes: -100
        }
      ]));
  });
});
