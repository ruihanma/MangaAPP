import { combineReducers } from 'redux';

import NavReducer from "./NavReducer"
import AuthReducer from "./AuthReducer"


const AppReducer = combineReducers({
  nav : NavReducer,
  auth : AuthReducer,
});

export default AppReducer;
