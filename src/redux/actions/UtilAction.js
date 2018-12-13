import * as Types from "./ActionType";
import {NativeModules, Platform} from "react-native";
// Util
import storage from "../../utils/storage";
import {resetLanguage} from "./SettingAction";
import {filterLocaleToLang} from "../../utils";


// 读取语言
// 读取语言 开始
export const onReadLanguageStart = () => {
  return {
    type: Types.READ_LANGUAGE_START,
  }
};
// 读取语言 结束
export const onReadLanguageEnd = (language) => {
  return {
    type: Types.READ_LANGUAGE_END,
    language
  }
};
export const readLanguage = () => {

  return (dispatch) => {
    // 开始读取语言
    dispatch(onReadLanguageStart());
    // 读取本地语言
    dispatch(readLocalLanguage());

  }
};

// 读取本地语言 /////////////////////////////////////////////////////////////////
// 读取本地语言 开始
export const onReadLocalLanguageRequest = () => {
  return {
    type: Types.READ_LOCAL_LANGUAGE_REQUEST,
  }
};

// 读取本地语言 成功
export const onReadLocalLanguageSuccess = (language) => {
  return {
    type: Types.READ_LOCAL_LANGUAGE_SUCCESS,
    language
  }
};

// 读取本地语言 失败
export const onReadLocalLanguageFailure = (error) => {
  return {
    type: Types.READ_LOCAL_LANGUAGE_FAILURE,
    error
  }
};

// 读取本地语言 方法
export const readLocalLanguage = () => {

  return dispatch => {
    dispatch(onReadLocalLanguageRequest());
    storage
      .load({
        key: "LANGUAGE"
      })
      .then(res => {
        console.log("读取本地成功", res);
        dispatch(onReadLocalLanguageSuccess(res));
        dispatch(onReadLanguageEnd(res));
      })
      .catch(err => {
        // console.log("读取本地失败", err);
        dispatch(onReadLocalLanguageFailure(err));
        // 失败则读取系统语言
        dispatch(readSystemLanguage())
      });

  }
};
// 读取本地语言 End /////////////////////////////////////////////////////////////////

// 读取系统语言 /////////////////////////////////////////////////////////////////
// 读取系统语言 开始
export const onReadSystemLanguageRequest = () => {
  return {
    type: Types.READ_SYSTEM_LANGUAGE_REQUEST,
  }
};

// 读取系统语言 成功
export const onReadSystemLanguageSuccess = (language) => {
  return {
    type: Types.READ_SYSTEM_LANGUAGE_SUCCESS,
    language
  }
};

// 读取系统语言 失败
export const onReadSystemLanguageFailure = (error) => {
  return {
    type: Types.READ_SYSTEM_LANGUAGE_FAILURE,
    error
  }
};

// 读取系统语言 方法
export const readSystemLanguage = () => {

  return (dispatch, getState) => {
    dispatch(onReadSystemLanguageRequest());

    let locale;
    Platform.OS === "ios"
      ?
      locale = NativeModules.SettingsManager.settings.AppleLocale
      :
      locale = NativeModules.I18nManager.localeIdentifier

    if (locale) {
      // console.log("读取系统成功", locale);
      dispatch(onReadSystemLanguageSuccess(locale));
      const lang = filterLocaleToLang(locale);
      if (lang) {
        dispatch(onReadLanguageEnd(lang));
      }
      else {
        dispatch(onReadLanguageEnd("en"));
      }
    }
    else {
      // console.log("读取系统失败", locale);
      dispatch(onReadSystemLanguageFailure("en"));
      dispatch(onReadLanguageEnd("en"));
    }
  }
};
// 读取系统语言 End /////////////////////////////////////////////////////////////////