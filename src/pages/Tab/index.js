/**
 * @Type Structure
 * @Name Tab
 */
// Core
import React from 'react';
import {Platform, Text} from 'react-native';
// Plugins
import {createBottomTabNavigator} from 'react-navigation';
import {Loc} from "redux-react-native-i18n";
import Icon from "react-native-vector-icons/Feather";

// Screens
import HomeScreen from "../Home"
import MeScreen from "../Me"
import GenusScreen from '../Genus';

// Style
import style from "./style"

const TabScreen = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Loc style={[style.text, focused && style.textActive]} locKey={"SCREEN.Home"} />
        ),
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? "home" : "home"}
            style={[style.icon, focused && style.iconActive]}
          />
        )
      }
    },
    Genus: {
      screen: GenusScreen,
      path: '/genus',
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Loc style={[style.text, focused && style.textActive]} locKey={"SCREEN.Genus"} />
        ),
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? "grid" : "grid"}
            style={[style.icon, focused && style.iconActive]}
          />
        )
      }
    },
    Me: {
      screen: MeScreen,
      path: '/me',
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Loc style={[style.text, focused && style.textActive]} locKey={"SCREEN.Me"} />
        ),
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? "user" : "user"}
            style={[style.icon, focused && style.iconActive]}
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