import React from "react";
// Plugins
import Modal from "react-native-modal";
// Plugins
// Style

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
