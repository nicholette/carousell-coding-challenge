import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import getRootReducer from '../app/reducers';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

// Connect store to reducers
export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        applyMiddleware(middleware),
        applyMiddleware(thunk)
    );

    return store;
}
