/**
 * @Type Screen
 * @Name Search
 */
// Core
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Components
import Header from "../../components/Header";

// Styles
import style from "./style"

type Props = {};
export default class SearchScreen extends Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={style.container}>
        <Header
          leftIcon={"chevron-left"}
          leftPress={() => navigation.goBack()}
          centerLocKey={"SCREEN.Search"}
        />
        <Text>SearchScreen</Text>
      </View>
    );
  }
}
