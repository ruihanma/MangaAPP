// Core
import React from 'react';
import {View, Picker} from 'react-native';

// Components
import Header from "../../components/Header/index";
import Modal from "../../components/Modal";

import style from "./style";
import {languages} from "../../assets/i18n";


export default class modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,

      language: this.props.language
    };
    // console.log("SettingLanguage.props", this.props)

  }

  render() {
    const {isVisible, toggleVisible, updateLanguage, onValueChange} = this.props;
    const {language} = this.state;
    return (
      <Modal isVisible={isVisible} style={style.modal} toggleVisible={() => toggleVisible(isVisible)}>
        <View style={style.modalContainer}>
          <Header
            noStatus={true}
            leftIcon={"x"}
            leftPress={() => toggleVisible(isVisible)}
            centerLocKey={"SCREEN.Setting.Language"}
            rightLocKey={"BUTTON.Confirm"}
            rightPress={() => updateLanguage(language)}
          />
          <Picker
            selectedValue={this.state.language}
            style={style.picker}
            itemStyle={style.pickerItem}
            onValueChange={(itemValue) => {
              this.setState({language: itemValue}, () => {
                onValueChange(itemValue);
              })
            }}
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
    )
  }

};