import { combineReducers } from 'redux';

import * as Actions from '../actions';

let topicsState = {
  firstLoad: true,
  rowLimit: 20,
  topics: [],
  newTitle: '',
  loading:true
};

function sortList(list) {
  return list && list.sort((a,b) => (b.votes - a.votes));
}

export const topicsReducer = (state = topicsState, action) => {
    switch (action.type) {
        case Actions.FETCH_TOPICS_LIST:
            state = Object.assign({}, state, {
              topics: sortList(action.topics),
              firstLoad: false,
              loading:false
            });
            return state;
        case Actions.ON_PRESS_VOTE:
            const { topicIndex, voteType } = action;
            const votes = voteType === 'upvote' ?
              state.topics[topicIndex].votes + 1
              : state.topics[topicIndex].votes - 1;
            const topic = Object.assign({}, state.topics[topicIndex], { votes });
            state = Object.assign({}, {
              ...state,
              topics: sortList([
                ...state.topics.slice(0,topicIndex),
                topic,
                ...state.topics.slice(topicIndex+1)
              ])
            });
            return state;
        case Actions.ON_CHANGE_TITLE:
          const { newTitle } = action;
          state = Object.assign({}, {
            ...state,
            newTitle
          });
          return state;
        case Actions.ON_CREATE_TOPIC:
            const newTopic = {
              name: state.newTitle,
              votes: 0
            }
            state = Object.assign({}, {
              ...state,
              newTitle: '',
              topics: sortList([ ...state.topics, newTopic ])
            });
            return state;
        default:
            return state;
    }
};

// Combine all the reducers
export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        topics: topicsReducer,
    });
}
