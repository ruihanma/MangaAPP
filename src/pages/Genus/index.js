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
export default class HomeScreen extends Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={style.container}>
        <Header
          centerLocKey={"SCREEN.Genus"}
          rightIcon={"search"}
          rightPress={() => navigation.navigate("Search")}
        />
        <Text>Screen Genus</Text>
      </View>
    );
  }
}
