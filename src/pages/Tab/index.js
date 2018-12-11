/**
 * @Type Structure
 * @Name Tab
 */
// Core
import React from 'react';
import {Platform, Text} from 'react-native';
// Plugins
import {createBottomTabNavigator} from 'react-navigation';
// Screen
import HomeScreen from "../Home"
import MeScreen from "../Me"

const TabScreen = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text>Home</Text>
        )
      }
    },
    Me: {
      screen: MeScreen,
      path: '/me',
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text>Me</Text>
        )
      }
    },
  },
  {
    tabBarOptions:
      (Platform.OS === 'android') ?
        {
          tabStyle: {
            padding: 0,
            flexDirection: 'column',
            alignItems: 'center'

          }
        }
        :
        {}
  })
;

export default TabScreen;