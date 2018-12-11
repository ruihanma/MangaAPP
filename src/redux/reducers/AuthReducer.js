import * as Types from "../actions/ActionType";

const initialAuthState = {
  isLoggedIn: false,
  token: ""
};

const AuthReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case Types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        isLoggedIn: true,
        token: action.token
      });
    case Types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        isLoggedIn: false
      });

    case Types.LOGOUT_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case Types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        isLoggedIn: false
      });
    case Types.LOGOUT_FAILURE:
      return Object.assign({}, state, {
        loading: false
      });
    default:
      return state;
  }
};

export default AuthReducer;
