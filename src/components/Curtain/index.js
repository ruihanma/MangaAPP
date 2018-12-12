import React from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
// Plugins
import Icon from "react-native-vector-icons/Feather"
import {Loc} from "redux-react-native-i18n"
// Style
import style from "./style"

export default class Curtain extends React.Component {
  render(){
    return(
      <View style={style.container}>
        <View style={style.underlay}>
          <View style={style.underlayMask} />
          <Image style={style.underlayImage} source={require("../../assets/images/avatar_default.png")}/>

        </View>
        <View style={style.content}>
          <View style={style.inner}>
            <Image style={style.avatar} source={require("../../assets/images/avatar_default.png")}/>
            <Text style={style.name}>盖尔 · 加朵</Text>

          </View>
        </View>
      </View>
    )
  }
}