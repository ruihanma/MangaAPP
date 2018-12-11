

import {NavigationActions} from "react-navigation";

import {RootNavigator} from "../../config/router";
import * as Types from "../actions/ActionType";

const firstAction = RootNavigator.router.getActionForPathAndParams('Tab');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('SignIn');
const initialNavState = RootNavigator.router.getStateForAction(
  tempNavState
);

function NavReducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case Types.LOGOUT_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SignIn' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default NavReducer;