/**
 * @Type Structure
 * @Name Tab
 */
// Core
import React from 'react';
import {Platform, Text} from 'react-native';
// Plugins
import {createBottomTabNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/Feather";
// Screen
import HomeScreen from "../Home"
import MeScreen from "../Me"
// Style
import style from "./style"

const TabScreen = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={[style.text, focused && style.textActive]}>Home</Text>
        ),
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? "home" : "home"}
            style={[style.icon , focused && style.iconActive]}
          />
        )
      }
    },
    Me: {
      screen: MeScreen,
      path: '/me',
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={[style.text, focused && style.textActive]}>Me</Text>
        ),
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? "user" : "user"}
            style={[style.icon , focused && style.iconActive]}
          />
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