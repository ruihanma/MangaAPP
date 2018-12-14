import React from "react";
import {View} from "react-native"
// Plugins
import Spinner from "react-native-spinkit"
// Styles
import style from "./style"
// ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt']
export default class SpinnerComponent extends React.Component {
  render() {
    const {isVisible} = this.props;
    return (
      <View style={style.container}>
        <Spinner
          size={this.props.size || 50}
          isVisible={true}
          type={this.props.type || "ChasingDots"}
          color={this.props.color || "#fff"}
        />
      </View>
    )
  }
}