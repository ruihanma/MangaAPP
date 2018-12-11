/**
 * @Type Screen
 * @Name Home
 */
// Core
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Components
import Header from "../../components/Header";

// Styles
import style from "./style"

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <Header
          centerTitle={"首页"}
        />
        <Text>Screen Home</Text>
      </View>
    );
  }
}
