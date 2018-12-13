import {combineReducers} from 'redux';
// Plugins
import {i18nReducer} from "redux-react-native-i18n";

import NavReducer from "./NavReducer"
import AuthReducer from "./AuthReducer"
import SettingReducer from "./SettingReducer"
import UtilReducer from "./UtilReducer";


const AppReducer = combineReducers({
  nav: NavReducer,
  auth: AuthReducer,
  i18n: i18nReducer,
  setting: SettingReducer,
  util: UtilReducer
});

export default AppReducer;
