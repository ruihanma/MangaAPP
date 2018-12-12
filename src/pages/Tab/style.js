import {StyleSheet} from "react-native";
import COMMON from "../../config/style"

export default (Styles = StyleSheet.create({
  text: {
    fontSize: 10,
    paddingBottom: 4,
    color: COMMON.TAB.Color.Default
  },
  textActive: {
    color: COMMON.TAB.Color.Dark
  },
  icon: {
    fontSize: 25,
    color: COMMON.TAB.Color.Default,
    paddingTop: 3,
  },
  iconActive: {
    color: COMMON.TAB.Color.Dark
  },
}))