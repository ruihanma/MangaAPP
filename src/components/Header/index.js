import React from "react";
import {Text, View, TouchableOpacity, StatusBar} from "react-native";
// Plugins
import Icon from "react-native-vector-icons/Feather"
import {Loc} from "redux-react-native-i18n"
// Style
import style from "./style"

export default class Header extends React.Component {
  render() {
    const {leftLocKey, leftText, leftIcon, leftPress} = this.props;
    const {rightLocKey, rightText, rightIcon, rightPress} = this.props;
    const {centerLocKey, centerText} = this.props;

    return (
      <React.Fragment>
        {/*默认 StatusBar 的样式*/}
        <StatusBar barStyle={"light-content"}/>

        <View style={style.container}>

          <View style={style.content}>
            {/*左边部分*/}
            {
              (leftIcon || leftLocKey || leftText || leftPress) &&
              <TouchableOpacity
                onPress={leftPress}
                style={[style.addon, style.part, style.left]}
              >
                {
                  leftIcon &&
                  <Icon style={[style.icon, style.leftIcon]} name={leftIcon}/>
                }
                {
                  leftLocKey && !leftText &&
                  <Loc style={[style.text, style.leftText]} locKey={leftLocKey}/>
                }
                {
                  leftText &&
                  <Text style={[style.text, style.leftText]}>{leftText}</Text>
                }
              </TouchableOpacity>
            }

            {/*中间部分*/}
            {
              (centerLocKey || centerText) &&
              <View style={[style.part, style.center]}>
                {
                  centerLocKey && !centerText &&
                  <Loc style={[style.text, style.leftText]} locKey={centerLocKey}/>
                }
                {
                  centerText &&
                  <Text numberOfLines={1} style={[style.text, style.centerText]}>{centerText}</Text>
                }
              </View>
            }

            {/*右边部分*/}
            {
              (rightIcon || rightLocKey || rightText || rightPress) &&
              <TouchableOpacity
                onPress={rightPress}
                style={[style.addon, style.part, style.right]}
              >
                {
                  rightIcon &&
                  <Icon style={[style.icon, style.rightIcon]} name={rightIcon}/>
                }
                {
                  rightLocKey && !rightText &&
                  <Loc style={[style.text, style.rightText]} locKey={rightLocKey}/>
                }
                {
                  rightText &&
                  <Text style={[style.text, style.rightText]}>{rightText}</Text>
                }
              </TouchableOpacity>
            }
          </View>
        </View>
      </React.Fragment>
    )
  }
}