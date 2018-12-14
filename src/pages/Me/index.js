/**
 * @Type Screen
 * @Name Home
 */
// Core
import React, {Component} from 'react';
import {Alert, View, ScrollView} from 'react-native';
// Plugins
import {connect} from "react-redux"
// Components
import Curtain from "../../components/Curtain";
import Cell from "../../components/Cell"
// Styles
import style from "./style"
// Actions
import {clearLocal} from "../../redux/actions/UtilAction";

type Props = {};
class MeScreen extends Component<Props> {

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
          <Cell
            cellPress={() => this.handleClearCache()}
            leftIcon={"trash-2"}
            centerLocKey={"SETTING.ClearCache"}
          />
        </View>
      </ScrollView>
    );
  }

  handleClearCache = () => {
    Alert.alert(
      'Alert Title',
      '你确定清除本地缓存么',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.props.clear_local()},
      ],
      { cancelable: false }
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  clear_local: () => dispatch(clearLocal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeScreen);
