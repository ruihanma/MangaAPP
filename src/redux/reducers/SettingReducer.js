import * as Types from '../actions/ActionType';

const initialLanguageState = {
  Loading: false,
  Error: null,

};

const LanguageReducer = (state = initialLanguageState, action) => {
  switch (action.type) {

    // 修改语言
    case Types.RESET_LANGUAGE_REQUEST :
      return Object.assign({}, state, {
        Loading: true,
      });
    case Types.RESET_LANGUAGE_SUCCESS :
      return Object.assign({}, state, {
        Loading: false,
      });
    case Types.RESET_LANGUAGE_FAILURE :
      return Object.assign({}, state, {
        Loading: false,
        Error: action.error,
      });


    default:
      return state;
  }
};

export default LanguageReducer;