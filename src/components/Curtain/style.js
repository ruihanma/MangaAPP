import {StyleSheet} from "react-native";
import COMMON from "../../config/style"

export default (Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: COMMON.CURTAIN.Height,
    backgroundColor: "#333",
    position: "relative",
  },

  underlay: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 9,
  },
  underlayImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: 9,
  },
  underlayMask: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10,
  },

  content: {
    width: "100%",
    height: "100%",
    marginTop: COMMON.STATUS.Height,
    flexDirection: "row",
    // backgroundColor: "rgba(255,255,255,0.1)",
    zIndex: 11,
    justifyContent: "center",
    // alignItems: "center"

  },
  inner: {
    width: "100%",
    height: "100%",
    // backgroundColor: "rgba(255,255,255,0.1)",
    // alignSelf: "center",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: COMMON.CURTAIN.Avatar.Top,

  },
  avatar: {
    width: COMMON.CURTAIN.Avatar.Size,
    height: COMMON.CURTAIN.Avatar.Size,
    borderRadius: COMMON.CURTAIN.Avatar.Size / 2
  },
  name: {
    fontSize: COMMON.CURTAIN.Name.Size,
    color: COMMON.CURTAIN.Name.Color,
    marginTop: COMMON.CURTAIN.Padding
  }

}));