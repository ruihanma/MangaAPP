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
import {readLanguage} from "./src/redux/actions/UtilAction";

// Redux
const store = createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(middleware, thunk)),
);

// Set Language
store.dispatch(i18nActions.setDictionaries(dictionaries));
store.dispatch(i18nActions.setLanguages(languages));
store.dispatch(i18nActions.setCurrentLanguage("cn"));

// Check Local Storage
store.dispatch(readLanguage());

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
