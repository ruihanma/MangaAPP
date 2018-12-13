/**
 * @Type Screen
 * @Name Search
 */
// Core
import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';

// Components
import Header from "../../components/Header/index";
import Cell from "../../components/Cell";
import Modal from "../../components/Modal";

// Styles
import style from "./style"
import {connect} from "react-redux";
// Assets
import {languagesMap, languages} from "../../assets/i18n";
// Redux
import {resetLanguage} from '../../redux/actions/SettingAction'


type Props = {};

class SettingLanguageScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,

      language: this.props.Language
    };
    // console.log("SettingLanguage.props", this.props)

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  render() {
    const {navigation, Language} = this.props;
    const {isVisible, language} = this.state;
    return (
      <View style={style.container}>
        <Header
          leftIcon={"chevron-left"}
          leftPress={() => navigation.goBack()}
          centerLocKey={"SCREEN.Setting.Language"}
        />
        <Modal isVisible={isVisible} style={style.modal} toggleVisible={() => this.toggleVisible(isVisible)}>
          <View style={style.modalContainer}>
            <Header
              noStatus={true}
              leftIcon={"x"}
              leftPress={() => this.toggleVisible(isVisible)}
              centerLocKey={"SCREEN.Setting.Language"}
              rightLocKey={"BUTTON.Confirm"}
              rightPress={() => this.updateLanguage(language)}
            />
            <Picker
              selectedValue={this.state.language}
              style={style.picker}
              itemStyle={style.pickerItem}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
            >
              {
                languages && languages.length > 0 &&
                languages.map((lang, key) => {
                  return <Picker.Item key={key} label={lang.name} value={lang.code}/>
                })
              }
            </Picker>
          </View>
        </Modal>

        <View>
          <Cell
            cellPress={() => this.toggleVisible(isVisible)}
            leftIcon={"feather"}
            centerLocKey={"SETTING.LanguageCurrent"}
            rightText={languagesMap[Language]}
          />
        </View>
      </View>
    );
  }

  // 反选模态窗
  toggleVisible = (isVisible) => {
    this.setState({isVisible: !isVisible})
  };

  // 更新语言state
  updateLanguage = (language) => {
    this.setState({language, isVisible: false}, () => {
      this.props.reset_language(language);
      // console.log("this.state", this.state);
    })

  }
}

const mapStateToProps = state => ({
  Language: state.i18n.currentLanguage,
});

const mapDispatchToProps = dispatch => ({
  reset_language: (language) => dispatch(resetLanguage(language)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingLanguageScreen);

