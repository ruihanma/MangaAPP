import * as Types from './ActionType';
// Plugins
import {i18nActions} from 'redux-react-native-i18n';
import {toastInitial, spinInitial, spinHidden} from "./UtilAction";


// 重置语言 /////////////////////////////////////////////////////////////////
// 重置语言 开始
export const onResetLanguageRequest = () => {
  return {
    type: Types.RESET_LANGUAGE_REQUEST,
  }
};

// 重置语言 成功
export const onResetLanguageSuccess = (language) => {
  return {
    type: Types.RESET_LANGUAGE_SUCCESS,
    language
  }
};

// 重置语言 失败
export const onResetLanguageFailure = (error) => {
  return {
    type: Types.RESET_LANGUAGE_FAILURE,
    error
  }
};

// 重置语言 方法
export const resetLanguage = (language, delay) => {
  return (dispatch) => {
    dispatch(onResetLanguageRequest());
    dispatch(spinInitial("DURATION.Loading"));
    if (language) {
      if (delay) {
        setTimeout(() => {
          dispatch(i18nActions.setCurrentLanguage(language));
          dispatch(onResetLanguageSuccess());
          dispatch(toastInitial("成功", 1500));
          dispatch(spinHidden());
        }, delay)
      }
      else {
        dispatch(i18nActions.setCurrentLanguage(language));
        dispatch(onResetLanguageSuccess());
        dispatch(spinHidden());
      }
    }
    else {
      dispatch(onResetLanguageFailure("No Util Language Found"));
      dispatch(i18nActions.setCurrentLanguage("en"));
      dispatch(spinHidden());
    }
  }
};
// 重置语言 End /////////////////////////////////////////////////////////////////