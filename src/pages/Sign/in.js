/**
 * @Type Screen
 * @Name Sign in
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
class SignInScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen Sign in</Text>
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'LOGIN_SUCCESS' })}
          title="Log in"
        />
      </View>
    );
  }
}


SignInScreen.navigationOptions = {
  title: 'Log In',
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
