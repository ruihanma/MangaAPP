import {StyleSheet} from "react-native";
import COMMON from "../../config/style"

export default (Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: COMMON.CELL.Height,
    position: "relative",
    backgroundColor: COMMON.CELL.Background.Color,
    borderBottomWidth: COMMON.CELL.Border.Width,
    borderBottomColor: COMMON.CELL.Border.Color,
    borderStyle: COMMON.CELL.Border.Style,
  },

  content: {
    width: "100%",
    height: COMMON.CELL.Height,
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between"
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
    zIndex: 99,
    minWidth: COMMON.CELL.Height,
    height: COMMON.CELL.Height,
    // paddingHorizontal: COMMON.HEADER.Padding,
  },

  // 公用文字样式
  text: {
    fontSize: COMMON.CELL.Font.Size,
    color: COMMON.CELL.Font.Color,
    marginTop: 1
  },
  // 公用icon样式
  icon: {
    fontSize: COMMON.CELL.Icon.Size,
    color: COMMON.CELL.Icon.Color,
  },


  left: {},
  center: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "flex-start"
  },
  centerText: {

  },
  right: {},
  rightText: {
    fontSize: COMMON.CELL.Font.Size * 0.85
  },
  rightIcon: {
    fontSize: COMMON.CELL.Icon.Size * 0.7
  }

}));