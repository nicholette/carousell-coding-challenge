import React from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import Topics from './app/components/topics';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Topics />
        </Provider>
    );
  }
}
