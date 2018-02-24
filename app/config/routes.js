import { StackNavigator } from "react-navigation";

import TopicsScreen from '../containers/Topics';
import NewTopicScreen from '../containers/NewTopic';

const Routes = {
    Topics: { screen: TopicsScreen },
    NewTopic: { screen: NewTopicScreen }
};

export const AppNavigator = StackNavigator(Routes);

const initialState = AppNavigator.router.getStateForAction(
                      AppNavigator.router.getActionForPathAndParams('Topics')
                    );

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

// ref: https://moduscreate.com/blog/react-navigation-redux-in-react-native-applications/
