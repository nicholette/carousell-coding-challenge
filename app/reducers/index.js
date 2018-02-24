import { combineReducers } from 'redux';

import { FETCH_TOPICS_LIST, ON_PRESS_VOTE, ON_PRESS_NEW_TOPIC } from '../actions';

let topicsState = {
  rowLimit: 20,
  topics: [],
  loading:true
};

function sortList(list) {
  return list && list.sort((a,b) => (b.votes - a.votes));
}

export const topicsReducer = (state = topicsState, action) => {
    switch (action.type) {
        case FETCH_TOPICS_LIST:
            state = Object.assign({}, state, {
              topics: sortList(action.topics),
              loading:false
            });
            return state;
        case ON_PRESS_VOTE:
            const { topicIndex, voteType } = action;
            const votes = voteType === 'upvote' ?
              state.topics[topicIndex].votes + 1 : state.topics[topicIndex].votes - 1;
            const topic = Object.assign({}, state.topics[topicIndex], { votes });
            state = Object.assign({}, {
              ...state,
              topics: sortList([...state.topics.slice(0,topicIndex), topic, ...state.topics.slice(topicIndex+1)])
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
