import * as Types from "../actions/ActionType";

// 登入
export const onLoginRequest = () => {
  return {
    type: Types.LOGIN_REQUEST
  };
};
export const onLoginSuccess = isLoggedIn => {
  console.log("onLoginSuccess");
  return {
    type: Types.LOGIN_SUCCESS,
    isLoggedIn
  };
};
export const onLoginFailure = () => {
  return {
    type: Types.LOGIN_FAILURE
  };
};

// 登出
export const onLogoutRequest = () => {
  return {
    type: Types.LOGOUT_REQUEST
  };
};
export const onLogoutSuccess = () => {
  return {
    type: Types.LOGOUT_SUCCESS
  };
};
export const onLogoutFailure = () => {
  return {
    type: Types.LOGOUT_FAILURE
  };
};

// 页面推送
// 页面推送方法 包含名称
export const pushToPage = params => {
  return {
    type: Types[params.actionName],
    destination: params.routeName
  };
};
// 页面推送方法
export const pushPage = params => {
  return {
    type: Types.PUSH_PAGE,
    destination: params.routeName,
    params: params.params
  };
};
// 页面推送方法
export const replacePage = params => {
  return {
    type: Types.REPLACE_PAGE,
    destination: params.routeName,
    params: params.params
  };
};

// 重置state
export const resetRouteState = () => {
  return {
    type: Types.NAV_RESET_ROUTE
  };
};

// 重置state
export const resetRouteMainState = () => {
  return {
    type: Types.NAV_RESET_MAIN
  };
};
// 初始所以reducer，/目前只充值了marketReducer
export const resetReducer = () => {
  return {
    type: Types.RESET
  };
};
