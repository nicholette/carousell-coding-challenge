import { combineReducers } from 'redux';

import { FETCH_TOPICS_LIST } from "../actions/" //Import the actions types constant we defined in our actions

let topicsState = { topics: [], loading:true };

const topicsReducer = (state = topicsState, action) => {
    switch (action.type) {
        case FETCH_TOPICS_LIST:
            state = Object.assign({}, state, { topics: action.topics, loading:false });
            return state;
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    topicsReducer
})

export default rootReducer;
