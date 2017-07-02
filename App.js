import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

function LabelledInput(props) {
  return (
    <View>
      <Text style={styles.formRow}>{props.label}</Text>
      <TextInput placeholder={props.placeholder} secureTextEntry={props.obscured} style={styles.formRow} />
    </View>
  )
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LabelledInput label="Username:" placeholder="john" />
        <LabelledInput label="Password:" placeholder="mypass" obscured />
        <Button title="Login" onPress={() => {this.props.navigation.navigate('Main')}}/>
      </View>
    )
  }
}

function MainScreen(props) {
  return (
    <View>
      <Text>Main data</Text>
    </View>
  )
}

const store = createStore(reducer)

const App = StackNavigator({
  Login: {screen: LoginScreen},
  Main: {screen: MainScreen}
})

export default (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
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
})
