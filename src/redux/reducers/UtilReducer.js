import * as Types from '../actions/ActionType';

const initialUtilState = {
  Loading: false,

  // 系统读取状态
  LoadingSystem: false,
  LanguageSystem: null,
  ErrorSystem: null,

  // 本地初始状态
  LoadingLocal: false,
  ErrorLocal: null,

  //
  Saving: false,
  ErrorSave: null
};

const UtilReducer = (state = initialUtilState, action) => {
  switch (action.type) {

    // 读取语言
    case Types.SET_LANGUAGE_START :
      return Object.assign({}, state, {
        Loading: true,
      });
    case Types.SET_LANGUAGE_ENDED :
      return Object.assign({}, state, {
        Loading: false,
      });

    // 读取本地语言
    case Types.READ_LOCAL_LANGUAGE_REQUEST :
      return Object.assign({}, state, {
        LoadingLocal: true,
      });
    case Types.READ_LOCAL_LANGUAGE_SUCCESS :
      return Object.assign({}, state, {
        LoadingLocal: false,
      });
    case Types.READ_LOCAL_LANGUAGE_FAILURE :
      return Object.assign({}, state, {
        LoadingLocal: false,
        ErrorLocal: action.error,
      });

    // 读取系统语言
    case Types.READ_SYSTEM_LANGUAGE_REQUEST :
      return Object.assign({}, state, {
        LoadingSystem: true,
      });
    case Types.READ_SYSTEM_LANGUAGE_SUCCESS :
      return Object.assign({}, state, {
        LoadingSystem: false,
        LanguageSystem: action.language,
      });
    case Types.READ_SYSTEM_LANGUAGE_FAILURE :
      // 如果失败 给与默认语言：英语
      return Object.assign({}, state, {
        LoadingSystem: false,
        LanguageSystem: action.error,
      });

    // 保存语言到本地
    case Types.SAVE_LANGUAGE_LOCAL_REQUEST :
      return Object.assign({}, state, {
        Saving: true,
      });
    case Types.SAVE_LANGUAGE_LOCAL_SUCCESS :
      return Object.assign({}, state, {
        Saving: false,
        LanguageLocal: action.language,
      });
    case Types.SAVE_LANGUAGE_LOCAL_FAILURE :
      // 如果失败 给与默认语言：英语
      return Object.assign({}, state, {
        Saving: false,
        ErrorSave: action.error,
      });

    default:
      return state;
  }
};

export default UtilReducer;