import React from 'react';
import { connect } from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
// Screen
import LoginScreen from '../pages/Sign/in';
import TabScreen from '../pages/Tab';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);


const RootNavigator = createStackNavigator({
    Tab: {
      screen: TabScreen
    },
    SignIn: {
      screen: LoginScreen,
    },
  }, {
    navigationOptions: {
      header: null
    }
  }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };