/** @format */

import {AppRegistry} from 'react-native';
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "unknown call"
]);
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
