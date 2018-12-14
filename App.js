/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
"use strict"
// Core
import React from 'react';
// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// Plugins
import thunk from 'redux-thunk';
import {i18nActions} from "redux-react-native-i18n";
// Dev Plugins
import {composeWithDevTools} from 'redux-devtools-extension';
// Assets
import {languages, dictionaries} from "./src/assets/i18n/index";

// Router
import {AppNavigator, middleware} from "./src/config/router";
import AppReducer from './src/redux/reducers';
// Utils
import {setLanguage} from "./src/redux/actions/UtilAction";

// Redux
const store = createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(middleware, thunk)),
);

store.dispatch(i18nActions.setDictionaries(dictionaries));
store.dispatch(i18nActions.setLanguages(languages));
store.dispatch(i18nActions.setCurrentLanguage("cn"));
// Set Language
store.dispatch(setLanguage());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default App;
