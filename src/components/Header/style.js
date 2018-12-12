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
    paddingHorizontal: 10,
  },
  // 公用文字样式
  text: {
    color: COMMON.HEADER.Font.Color,
    marginTop: 1
  },
  // 公用icon样式
  icon: {
    fontSize: 20,
    color: COMMON.HEADER.Font.Color,
  },

  // 独立样式
  // 左侧
  left: {
    left: 0,
    backgroundColor: "#fff"
  },
  leftText: {},
  leftIcon: {},

  // 中间
  center: {
    flex: 1,
    paddingHorizontal: COMMON.HEADER.Height
  },
  centerText: {
    fontSize: 16,
    lineHeight: 18
  },

  // 右侧
  right: {
    right: 0,
  },
  rightText: {
    paddingLeft: 5
  },
  rightIcon: {},


}))