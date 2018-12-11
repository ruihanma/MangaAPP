/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// Core
import React from 'react';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Plugins
import thunk from 'redux-thunk';
// Dev Plugins
import { composeWithDevTools } from 'redux-devtools-extension';

// Router
import { AppNavigator, middleware } from "./src/config/router";
import AppReducer from './src/redux/reducers';

const store = createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(middleware, thunk)),
);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
