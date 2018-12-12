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
    Padding: 10,
    Background: {
      Color: COLOR.THEME_DEFAULT.Primary,
    },
    Font: {
      Size: 14,
      Color: COLOR.THEME_DEFAULT.Blank,
    },
    Icon: {
      Size: 20,
      Color: COLOR.THEME_DEFAULT.Blank,
    }
  },

  // Curtain
  CURTAIN: {
    Height: height * 0.4,
    Padding: 10,
    Avatar: {
      Top: height * 0.1,
      Size: 75,
    },
    Name: {
      Size: 16,
      Color: COLOR.THEME_DEFAULT.Blank,
    }
  },

  // Tab
  TAB: {
    Color: {
      Default: COLOR.THEME_DEFAULT.Light,
      Dark: COLOR.THEME_DEFAULT.Dark
    },

  },

};

export default CommonStyle;