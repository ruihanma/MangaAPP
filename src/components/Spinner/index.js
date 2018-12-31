import React from "react";
import {View, Text} from "react-native"
// Plugins
import Spinner from "react-native-spinkit";
import {Loc} from "redux-react-native-i18n";
// Styles
import style from "./style"
import {connect} from "react-redux";
// ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt']
 class SpinnerComponent extends React.Component {
   constructor(props){
     super(props);

     console.log('spin.props', props);
   }
  render() {
    const {Visible, Message, Type} = this.props;
    if(!Visible) return null;
    return (
      <View style={style.container}>
        <Spinner
          size={this.props.size || 50}
          isVisible={Visible}
          type={Type || "ChasingDots"}
          color={this.props.color || "#fff"}
        />
        {
          Message &&
          <Loc locKey={Message} style={style.text} />
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  Visible: state.util.SpinVisible,
  Message: state.util.SpinMessage,
  Type: state.util.SpinGenre,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinnerComponent);