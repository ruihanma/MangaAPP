import {StyleSheet} from "react-native";
import COMMON from "../../config/style"

export default (Styles = StyleSheet.create({
  text: {
    fontSize: 10,
    paddingBottom: 4,
    color: COMMON.COLOR.Default
  },
  textActive: {
    color: COMMON.COLOR.Dark
  },
  icon: {
    fontSize: 25,
    color: COMMON.COLOR.Default,
    paddingTop: 3,
  },
  iconActive: {
    color: COMMON.COLOR.Dark
  },
}))