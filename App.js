import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function LabelledInput(props) {
  return (
    <View>
      <Text style={styles.formRow}>{props.label}</Text>
      <TextInput placeholder={props.placeholder} secureTextEntry={props.obscured} style={styles.formRow} />
    </View>
  )
}

class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  formRow: {
    textAlign: 'center'
  }
});
