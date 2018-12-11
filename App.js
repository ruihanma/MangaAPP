/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import AppNavigator from "./src/config/router"

class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

export default App;
