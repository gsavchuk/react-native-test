import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import * as c from './components'
import * as a from './actions'

const LoginScreenContainer = (() => {
  const mapStateToProps = state => ({
    loginFailed: state.user.loginFailed
  })
  return connect(mapStateToProps, a.mapDispatchToProps)(c.LoginScreen)
})()

const MainScreenContainer = c.MainScreen

const AppNavigator = StackNavigator({
  Login: {screen: LoginScreenContainer},
  Main: {screen: MainScreenContainer}
})

export const { router } = AppNavigator

const App = (() => {
  const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
  )
  
  const mapStateToProps = state => ({
    nav: state.user.navState
  })

  return connect(mapStateToProps)(AppWithNavigationState)
})()

export default App
