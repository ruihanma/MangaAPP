/**
 * @Type Screen
 * @Name Search
 */
// Core
import React, {Component} from 'react';
import {View} from 'react-native';

// Components
import Header from "../../components/Header/index";
import Cell from "../../components/Cell";
import Modal from "./modal";
import Spinner from "../../components/Spinner"

// Styles
import style from "./style"
// Assets
import {languagesMap} from "../../assets/i18n";
// Redux
import {connect} from "react-redux";
// Actions
import {resetLanguage} from '../../redux/actions/SettingAction';
import {saveLanguageLocal} from '../../redux/actions/UtilAction';


type Props = {};

class SettingLanguageScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,

      language: this.props.Language,

      loading: true
    };
    // console.log("SettingLanguage.props", this.props)

    this.updateLanguage = this.updateLanguage.bind(this);
    this.handlePickerValueChange = this.handlePickerValueChange.bind(this);
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

        <Modal isVisible={isVisible}
               language={Language}
               onValueChange={this.handlePickerValueChange}
               toggleVisible={() => this.toggleVisible(isVisible)}
               updateLanguage={() => this.updateLanguage(language)}
        />

        {
          this.props.Loading &&
          <Spinner/>
        }

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

  // 处理picker的滚动更新
  handlePickerValueChange(val) {
    this.setState({language: val})
  };

  // 反选模态窗
  toggleVisible(isVisible) {
    this.setState({isVisible: !isVisible})
  };

  // 更新语言state
  updateLanguage(language) {
    this.setState({language, isVisible: false}, () => {
      this.props.reset_language(language, 1500);
      this.props.save_language_local(language);
      // console.log("this.state", this.state);
    })
  }
}

const mapStateToProps = state => ({
  Language: state.i18n.currentLanguage,
  Loading: state.setting.Loading
});

const mapDispatchToProps = dispatch => ({
  reset_language: (language, delay) => dispatch(resetLanguage(language, delay)),
  save_language_local: (language) => dispatch(saveLanguageLocal(language)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingLanguageScreen);

