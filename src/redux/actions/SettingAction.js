import * as Types from './ActionType';
// Plugins
import {i18nActions} from 'redux-react-native-i18n';

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
export const resetLanguage = (language) => {

  return dispatch => {
    dispatch(onResetLanguageRequest());

    dispatch(onResetLanguageSuccess(language));
    dispatch(i18nActions.setCurrentLanguage(language));
  }
};
// 重置语言 End /////////////////////////////////////////////////////////////////