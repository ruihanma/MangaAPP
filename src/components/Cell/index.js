import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
// Plugins
import Icon from "react-native-vector-icons/Feather"
import {Loc} from "redux-react-native-i18n"
// Style
import style from "./style"

export default class Curtain extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){

  }
  render() {
    const {leftIcon, cellPress} = this.props;
    const {rightText, rightIcon} = this.props;
    const {centerLocKey, centerText} = this.props;
    return (
      <TouchableOpacity onPress={cellPress} style={style.container}>
        <View style={style.content}>
          <View style={[style.part, style.left, style.addon]}>
            {
              leftIcon &&
              <Icon style={[style.icon, style.leftIcon]} name={leftIcon}/>
            }
          </View>
          <View style={[style.part, style.center]}>
            {
              (centerLocKey && !centerText) &&
              <Loc style={[style.text, style.centerText]} locKey={centerLocKey}/>
            }
            {
              centerText &&
              <Text style={[style.text, style.centerText]}>{centerText}</Text>
            }
          </View>
          <View style={[style.part, style.right, style.addon]}>
            {
              rightText &&
              <Text style={[style.text, style.rightText]}>{rightText}</Text>
            }
            {
              rightIcon &&
              <Icon style={[style.icon, style.rightIcon]} name={rightIcon}/>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}