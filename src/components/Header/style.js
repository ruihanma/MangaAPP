import {StyleSheet} from "react-native";
import COMMON from "../../config/style"

export default (Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: COMMON.HEADER.Height + COMMON.STATUS.Height,
    backgroundColor: COMMON.HEADER.Background.Color
  },

  content: {
    width: "100%",
    height: COMMON.HEADER.Height,
    marginTop: COMMON.STATUS.Height,
    flexDirection: "row",
    position: "relative"
  },

  // 内部结构样式（3个部分）
  part: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  // 左右操作部分样式（2个部分）
  addon: {
    position: "absolute",
    zIndex: 99,
    minWidth: COMMON.HEADER.Height,
    height: COMMON.HEADER.Height,
    paddingHorizontal: COMMON.HEADER.Padding,
  },
  // 公用文字样式
  text: {
    fontSize: COMMON.HEADER.Font.Size,
    color: COMMON.HEADER.Font.Color,
    marginTop: 1
  },
  // 公用icon样式
  icon: {
    fontSize: COMMON.HEADER.Icon.Size,
    color: COMMON.HEADER.Icon.Color,
  },

  // 独立样式
  // 左侧
  left: {
    left: 0,
  },
  leftText: {},
  leftIcon: {},

  // 中间
  center: {
    flex: 1,
    paddingHorizontal: COMMON.HEADER.Height
  },
  centerText: {
    fontSize: COMMON.HEADER.Font.Size * 1.2,
    // lineHeight: 18
  },

  // 右侧
  right: {
    right: 0,
  },
  rightText: {
    paddingLeft: COMMON.HEADER.Padding / 2,
  },
  rightIcon: {},


}))