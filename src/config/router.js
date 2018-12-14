import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
// Screens
import TabScreen from '../pages/Tab';
import LoginScreen from '../pages/Sign/in';
import SearchScreen from '../pages/Search';
import LanguageScreen from '../pages/SettingLanguage';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);


const RootNavigator = createStackNavigator(
  {
    Tab: {
      screen: TabScreen
    },
    SignIn: {
      screen: LoginScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    SettingLanguage: {
      screen: LanguageScreen,
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

export {RootNavigator, AppNavigator, middleware};