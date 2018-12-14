import * as Types from "./ActionType";
import {NativeModules, Platform} from "react-native";
// Util
import storage from "../../utils/storage";
import {languagesMap} from "../../assets/i18n"
import {resetLanguage} from "./SettingAction";
import {filterLocaleToLang} from "../../utils";

// 读取语言 /////////////////////////////////////////////////////////////////
// 读取语言 开始
export const onSetLanguageStart = () => {
  return {
    type: Types.SET_LANGUAGE_START,
  }
};
// 读取语言 结束
export const onSetLanguageEnd = (language) => {
  return {
    type: Types.SET_LANGUAGE_ENDED,
    language
  }
};
export const setLanguage = () => {

  return (dispatch) => {
    // 开始读取语言
    dispatch(onSetLanguageStart());
    // 读取本地语言
    dispatch(readLocalLanguage());

  }
};
// 读取语言 End /////////////////////////////////////////////////////////////////

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
        dispatch(onReadLocalLanguageSuccess(res.LANGUAGE));
        // 设置显示语言
        dispatch(resetLanguage(res.LANGUAGE));
        // 完成
        dispatch(onSetLanguageEnd());
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
      // 过滤语言
      const lang = filterLocaleToLang(locale);
      if (lang && languagesMap[lang]) {
        // 存储到本地
        dispatch(saveLanguageLocal(lang));
        // 设置显示语言
        dispatch(resetLanguage(lang));
        // 完成
        dispatch(onSetLanguageEnd());
      }
      else {
        // 设置默认英语显示
        dispatch(saveLanguageLocal());
        dispatch(resetLanguage("en"));
        dispatch(onSetLanguageEnd("en"));
      }
    }
    else {
      // console.log("读取系统失败", locale);
      dispatch(onReadSystemLanguageFailure());
      // 存到本地
      dispatch(saveLanguageLocal("en"));
      dispatch(resetLanguage("en"));
      // 完成
      dispatch(onSetLanguageEnd());
    }
  }
};
// 读取系统语言 End /////////////////////////////////////////////////////////////////

// 保存语言到本地 /////////////////////////////////////////////////////////////////
// 保存语言到本地 开始
export const onSaveLanguageLocalRequest = () => {
  return {
    type: Types.SAVE_LANGUAGE_LOCAL_REQUEST,
  }
};
// 保存语言到本地 成功
export const onSaveLanguageLocalSuccess = (language) => {
  return {
    type: Types.SAVE_LANGUAGE_LOCAL_SUCCESS,
    language
  }
};
// 保存语言到本地 失败
export const onSaveLanguageLocalFailure = (error) => {
  return {
    type: Types.SAVE_LANGUAGE_LOCAL_FAILURE,
    error
  }
};
// 保存语言到本地 方法
export const saveLanguageLocal = (language) => {

  return (dispatch, getState) => {
    dispatch(onSaveLanguageLocalRequest());

    if (language) {
      storage
        .save({
          key: "LANGUAGE",
          data: {
            LANGUAGE: language
          },
          expires: null
        })
        .then(res => {
          dispatch(onSaveLanguageLocalSuccess(language))
        })
        .catch(err => {
          dispatch(onSaveLanguageLocalFailure("Save Error"))
        })
      ;
    }
    else {
      dispatch(onSaveLanguageLocalFailure("No Language Detected"))
    }

  }
};
// 保存语言 End /////////////////////////////////////////////////////////////////

// 清除本地信息 /////////////////////////////////////////////////////////////////
// 清除本地信息 开始
export const onClearLocalRequest = () => {
  return {
    type: Types.CLEAR_LOCAL_REQUEST,
  }
};
// 清除本地信息 成功
export const onClearLocalSuccess = () => {
  return {
    type: Types.CLEAR_LOCAL_SUCCESS
  }
};
// 清除本地信息 失败
export const onClearLocalFailure = (error) => {
  return {
    type: Types.CLEAR_LOCAL_FAILURE,
    error
  }
};
// 清除本地信息 方法
export const clearLocal = () => {

  return (dispatch) => {
    dispatch(onClearLocalRequest());

    storage._s.clear();
    dispatch(onClearLocalSuccess());

  }
};
// 保存语言 End /////////////////////////////////////////////////////////////////

// 显示提示信息 /////////////////////////////////////////////////////////////////
export const toastAppear = (message) => {
  return {
    type: Types.TOAST_APPEAR,
    message
  }
};
export const toastHidden = () => {
  return {
    type: Types.TOAST_HIDDEN
  }
};
// 显示提示信息 End /////////////////////////////////////////////////////////////////
