import React from 'react'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import * as c from './containers'

const store = createStore(reducer)

const usubscribe = store.subscribe(() => {
  // console.warn(store.getState().user.login)
})

const App = StackNavigator({
  Login: {screen: c.LoginScreenContainer},
  Main: {screen: c.MainScreenContainer}
})

export default (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
