/**
 * @Type Screen
 * @Name Home
 */
// Core
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

// Components
import Curtain from "../../components/Curtain";

// Styles
import style from "./style"

type Props = {};
export default class MeScreen extends Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={style.container}>
        <Curtain />
        <Text>Screen Me</Text>
      </ScrollView>
    );
  }
}
