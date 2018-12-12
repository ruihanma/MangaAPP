/**
 * @Type Screen
 * @Name Search
 */
// Core
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Components
import Header from "../../components/Header/index";
import Cell from "../../components/Cell";
import Modal from "../../components/Modal";

// Styles
import style from "./style"
import {connect} from "react-redux";
// Assets
import {languagesMap} from "../../assets/i18n"

type Props = {};

class SettingLanguageScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
    console.log("SettingLanguage.props", this.props)
  }

  render() {
    const {navigation, Language} = this.props;
    const {isVisible} = this.state;
    return (
      <View style={style.container}>
        <Header
          leftIcon={"chevron-left"}
          leftPress={() => navigation.goBack()}
          centerLocKey={"SCREEN.Setting.Language"}
        />
        <Modal isVisible={isVisible} style={style.modal} toggleVisible={() => this.handleModal(isVisible)}>
          <View style={style.modalContainer}>
            <Header
              noStatus={true}
              centerLocKey={"SCREEN.Setting.Language"}
              rightIcon={"x"}
              rightPress={() => this.handleModal(isVisible)}
            />
          </View>
        </Modal>

        <View>
          <Cell
            cellPress={() => this.handleModal(isVisible)}
            leftIcon={"feather"}
            centerLocKey={"SETTING.LanguageCurrent"}
            rightText={languagesMap[Language]}
          />
        </View>
      </View>
    );
  }

  handleModal = (isVisible) => {
    console.log("isVisible", isVisible);
    this.setState({isVisible: !isVisible})
  }
}

const mapStateToProps = state => ({
  Language: state.i18n.currentLanguage,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingLanguageScreen);

