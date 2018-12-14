import React from 'react';
import {Text} from 'react-native';
import Toast from 'react-native-root-toast';
import {resetLanguage} from "../../redux/actions/SettingAction";
import {toastHidden} from "../../redux/actions/UtilAction";
import {connect} from "react-redux";

 class ToastComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.Visible
    };

    console.log("toast.props", this.props)
  }

  render() {
    return <Toast
      visible={this.props.Visible}
      hideOnPress={true}
    ><Text>{this.props.Message}</Text></Toast>;
  }
}

const mapStateToProps = state => ({
  Visible: state.util.ToastVisible,
  Message: state.util.ToastMessage
});

const mapDispatchToProps = dispatch => ({
  toast_hidden: () => dispatch(toastHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastComponent);
