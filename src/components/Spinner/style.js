import {StyleSheet} from "react-native";
import COMMON from "../../config/style";

export default (Styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: COMMON.WIDTH,
    height: COMMON.HEIGHT,
    position: "absolute",
    zIndex: 99999,
    top: 0
  },
  text: {
    color: "#fff",
    fontSize: 20,
    paddingVertical: 15,
    textAlign: "center"
  }
}));