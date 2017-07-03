import { connect } from 'react-redux'
import * as c from './components'
import * as a from './actions'

export const LoginScreenContainer = connect(null, a.mapDispatchToProps)(c.LoginScreen)
export const MainScreenContainer = c.MainScreen
