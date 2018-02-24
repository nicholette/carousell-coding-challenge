import React, { Component }from 'react';
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import {
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

import getStore from './app/store';
import { AppNavigator, navReducer } from './app/config/routes';

class AppWithNavigation extends Component {
    render() {
        const addListener = createReduxBoundAddListener("root");
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                })}
            />
        );
    }
}

function mapStateToProps(state, props) {
    return { nav: state.nav}
}
const AppWithNavigationState = connect(mapStateToProps)(AppWithNavigation);

const store = getStore(navReducer);
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
  }
}
