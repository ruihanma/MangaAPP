import React from 'react';
import {createStackNavigator} from 'react-navigation';
// Screen
import LoginScreen from '../pages/Sign/in';
import TabScreen from '../pages/Tab'

export const AppNavigator = createStackNavigator({
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

export default AppNavigator