import React from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import TopicsContainer from './app/containers/Topics';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <TopicsContainer />
        </Provider>
    );
  }
}
