import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

function LabelledInput({label, placeholder, obscured, handler}) {
  return (
    <View>
      <Text style={styles.formRow}>{label}</Text>
      <TextInput placeholder={placeholder} secureTextEntry={obscured}
        onChangeText={handler} style={styles.formRow} />
    </View>
  )
}

export function LoginScreen({loginFailed, updateLogin, updatePassword, doLogin}) {
  return (
    <View style={styles.loginScreen}>
      { loginFailed && <Text style={[styles.formRow, {color: 'red'}]} >Login failed</Text> }
      <LabelledInput label="Username:" placeholder="john" handler={updateLogin} />
      <LabelledInput label="Password:" placeholder="mypass" obscured handler={updatePassword} />
      <Button title="Login" onPress={doLogin} />
    </View>
  )
}

export function MainScreen(props) {
  return (
    <View>
      <Text>Main data</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  formRow: {
    textAlign: 'center'
  }
})
