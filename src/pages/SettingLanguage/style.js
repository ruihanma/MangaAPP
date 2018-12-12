import {StyleSheet} from "react-native";
import COMMON from "../../config/style"

export default (Styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },

  modal: {
    margin: 0,
    position: "relative"
  },
  modalContainer: {
    position: "absolute",
    width: "100%",
    height: COMMON.HEIGHT * 0.4,
    top: COMMON.HEIGHT * 0.6,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  picker: {
    width: "100%",
    height: "100%",
  },
  pickerItem: {
    color: "#fff",
  }
}))