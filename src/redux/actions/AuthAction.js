import * as Types from '../actions/ActionType';

// 登入
export const onLoginRequest = () => {
  return {
    type: Types.LOGIN_REQUEST,
  }
};
export const onLoginSuccess = (token) => {
  return {
    type: Types.LOGIN_SUCCESS,
    token: token
  }
};
export const onLoginFailure = () => {
  return {
    type: Types.LOGIN_FAILURE,
  }
};

// 登出
export const onLogoutRequest = () => {
  return {
    type: Types.LOGOUT_REQUEST,
  }
};
export const onLogoutSuccess = () => {
  return {
    type: Types.LOGOUT_SUCCESS,
  }
};
export const onLogoutFailure = () => {
  return {
    type: Types.LOGOUT_FAILURE,
  }
};



