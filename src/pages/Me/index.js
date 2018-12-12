/**
 * @Type Screen
 * @Name Home
 */
// Core
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
// Plugins
import {connect} from "react-redux"
// Components
import Curtain from "../../components/Curtain";
import Cell from "../../components/Cell"
// Styles
import style from "./style"

type Props = {};
export default class MeScreen extends Component<Props> {

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={style.container}>
        <Curtain name={"盖尔 · 加朵"} />
        <View>
          <Cell
            cellPress={() => navigation.navigate("SettingLanguage")}
            leftIcon={"feather"}
            centerLocKey={"SETTING.Language"}
            rightIcon={"chevron-right"}
          />
        </View>
      </ScrollView>
    );
  }
}
