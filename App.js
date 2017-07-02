import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function LabelledInput(props) {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput placeholder={props.placeholder} secureTextEntry={props.obscured} />
    </View>
  )
}

class LoginForm extends React.Component {
  render() {
    return (
      <View>
        <LabelledInput label="Username:" placeholder="john" />
        <LabelledInput label="Password:" placeholder="mypass" obscured />
        <Button title="Login" />
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <LoginForm />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
