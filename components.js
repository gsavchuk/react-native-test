import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

function LabelledInput({label, placeholder, obscured, handler}) {
  return (
    <View style={styles.row}>
      <Text style={styles.key}>{label}</Text>
      <TextInput placeholder={placeholder} secureTextEntry={obscured}
        onChangeText={handler} style={[styles.value, {paddingLeft: 10}]} />
    </View>
  )
}

export function LoginScreen({loginFailed, updateLogin, updatePassword, doLogin}) {
  return (
    <View style={styles.form}>
      { loginFailed && <Text style={[styles.center, {color: 'red'}]} >Login failed</Text> }
      <LabelledInput label="Username:" placeholder="john" handler={updateLogin} />
      <LabelledInput label="Password:" placeholder="mypass" obscured handler={updatePassword} />
      <Button title="Login" onPress={doLogin} />
    </View>
  )
}

function createRow(key, value, shift, keyPrefix) {
  return (
    <View style={styles.row} key={keyPrefix + key}>
      <Text style={styles.key}>{key + ":"}</Text>
      <Text style={[styles.value, {marginLeft: shift}]}>{value}</Text>
    </View>
  )
}

const SHIFT_SUBROWS = 20 // pixels
const PREFIX_SEPARATOR = '>'

function convertToRows(data, shift, keyPrefix) {
  let rows = []
  for (let key in data) {
    let val = data[key]
    if (Array.isArray(val)) {
      rows.push(createRow(key, '', shift, keyPrefix));
      let subrows = val.map((newVal, idx) => 
        convertToRows(newVal, shift + SHIFT_SUBROWS, idx + PREFIX_SEPARATOR + keyPrefix))
      rows = rows.concat(...subrows)
    } else {
      rows.push(createRow(key, val, shift, keyPrefix))
    }
  }
  return rows
}

export class MainScreen extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchData();
  }
  
  render() {
    const p = this.props
    const {data, isFetching} = p
    return (
      <View style={styles.form}>
        { isFetching && <Text style={styles.center}>Loading...</Text>}
        { data && convertToRows(data, 0) }
        <Button title="Logout" onPress={p.doLogout} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  key: {
    marginLeft: 10,
    flex: 1
  },
  value: {
    flex: 2
  }
})
