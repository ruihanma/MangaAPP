import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get("window");

const CommonStyle = {
  WIDTH: width,
  HEIGHT: height,

  // Color
  COLOR: {
    Default: "#666",
    Dark: "#000"
  },

};

export default CommonStyle;