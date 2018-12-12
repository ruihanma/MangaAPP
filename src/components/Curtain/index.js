import React from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
// Plugins
import Icon from "react-native-vector-icons/Feather"
import {Loc} from "redux-react-native-i18n"
// Style
import style from "./style"

export default class Curtain extends React.Component {
  render() {
    const {name, avatar} = this.props;
    return (
      <View style={style.container}>
        <View style={style.underlay}>
          <View style={style.underlayMask}/>
          <Image style={style.underlayImage} source={
            avatar ?
              {uri: avatar}
              :
              require("../../assets/images/avatar_default.png")
          }/>
        </View>
        <View style={style.content}>
          <View style={style.inner}>
            <Image style={style.avatar} source={
              avatar ?
                {uri: avatar}
                :
                require("../../assets/images/avatar_default.png")
            }/>
            {
              name &&
              <Text style={style.name}>{name}</Text>
            }

          </View>
        </View>
      </View>
    )
  }
}