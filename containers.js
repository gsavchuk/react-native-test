import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import * as c from './components'
import * as a from './actions'

const LoginScreenContainer = (() => {
  const mapStateToProps = state => ({
    loginFailed: state.user.loginFailed
  })

  const mapDispatchToProps = dispatch => ({
    updateLogin: login => {
      dispatch(a.updateLogin(login))
    },
    updatePassword: password => {
      dispatch(a.updatePassword(password))
    },
    doLogin: () => {
      dispatch({type: a.LOGIN})
    }
  })

  return connect(mapStateToProps, mapDispatchToProps)(c.LoginScreen)
})()

const MainScreenContainer = (() => {
  function mapStateToProps(state) {
//    console.warn(Object.keys(state.mainContent).join())
    return {
      data: state.user // should be mainContent, but it hangs here
    }
  }
  /*
  const mapStateToProps = state => ({
    data: state.mainContent
  })
*/
  const mapDispatchToProps = dispatch => ({
    fetchData: () => {
      dispatch(a.fetchDataIfNeeded())
    },
    doLogout: () => {
      dispatch({type: a.LOGOUT})
    }
  })

  return connect(mapStateToProps, mapDispatchToProps)(c.MainScreen)
})()

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
