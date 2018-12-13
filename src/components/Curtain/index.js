import React from "react";
import {Text, View, Image} from "react-native";
// Plugins
import {BlurView} from "react-native-blur";
// Style
import style from "./style"

export default class Curtain extends React.Component {
  state = {
    viewRef: null
  };

  render() {
    const {name, avatar} = this.props;
    return (
      <View style={style.container}>
        <View style={style.underlay}>
          {/*<View style={style.underlayMask}/>*/}
          <Image style={style.underlayImage} source={
            avatar ?
              {uri: avatar}
              :
              require("../../assets/images/avatar_default.png")
          }/>
          <BlurView
            style={style.underlayMask}
            viewRef={this.state.viewRef}
            blurType="dark"
            blurAmount={32}
          />
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