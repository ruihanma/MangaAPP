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
import {Text} from "react-native";
// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// Plugins
import thunk from 'redux-thunk';
import {i18nActions} from "redux-react-native-i18n";
import Toast from "./src/components/Toast"
// Dev Plugins
import {composeWithDevTools} from 'redux-devtools-extension';
// Assets
import {languages, dictionaries} from "./src/assets/i18n/index";

// Router
import {AppNavigator, middleware} from "./src/config/router";
import AppReducer from './src/redux/reducers';
// Utils
import {setLanguage, toastAppear} from "./src/redux/actions/UtilAction";

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
        <Toast/>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default App;
