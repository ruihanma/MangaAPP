import {Dimensions, Platform} from "react-native";
import {isIphoneX} from "react-native-iphone-x-helper";
import COLOR from "./style.color"

const {height, width} = Dimensions.get("window");

const CommonStyle = {
  WIDTH: width,
  HEIGHT: height,

  // State
  STATUS: {
    Height: Platform.OS === "android" ? 0 : isIphoneX() ? 45 : 20,
  },

  // Header
  HEADER: {
    Height: 44,
    Background: {
      Color: COLOR.THEME_DEFAULT.Primary,
    },
    Font: {
      Color: COLOR.THEME_DEFAULT.Blank,
    }
  },

  // Color
  TAB: {
    Color: {
      Default: COLOR.THEME_DEFAULT.Light,
      Dark: COLOR.THEME_DEFAULT.Dark
    },

  },

};

export default CommonStyle;