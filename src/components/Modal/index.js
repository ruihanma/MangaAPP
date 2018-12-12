import React, {Component} from "react";
import {Text, View, Picker, TouchableHighlight, Platform} from "react-native";

// Plugins
import Modal from "react-native-modal";
// Plugins
import Icon from "react-native-vector-icons/Feather"
import {Loc} from "redux-react-native-i18n"
// Style
import style from "./style"

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);

    // console.log("ModalComponent.props", this.props)
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps)
  }

  render() {
    const {isVisible, children, toggleVisible} = this.props;
    // const {isVisible} = this.state;
    return (
      <Modal
        isVisible={isVisible}
        style={{...this.props.style}}
        useNativeDriver={true}
        onBackdropPress={() => toggleVisible(isVisible)}
      >
          {children}
      </Modal>
    )
  }
}
