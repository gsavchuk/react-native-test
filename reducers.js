import { combineReducers } from 'redux'
import * as a from './actions'
import { router as r } from './containers'

const LOGINS = {
  'user1': 'pass1',
  'u': 'p'
}

const isValidUser = ({login, password}) =>
  LOGINS[login] === password

const loginState = r.getStateForAction(r.getActionForPathAndParams('Login'))
const mainState = r.getStateForAction(r.getActionForPathAndParams('Main'))

function user (state = {
  login: '',
  password: '',
  loggedIn: false,
  loginFailed: false,
  navState: loginState
}, action) {
  switch (action.type) {
    case a.UPDATE_LOGIN:
      return {
        ...state,
        login: action.login,
        loginFailed: false
      }
    case a.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
        loginFailed: false
      }
    case a.LOGIN:
      const loggedIn = isValidUser(state)
      return {
        ...state,
        loggedIn,
        loginFailed: !loggedIn,
        navState: loggedIn ? mainState : loginState
      }
    case a.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        navState: loginState
      }
    default:
      return state
  }
}

function mainContent (state = {
  isFetching: false,
  didInvalidate: false,
  data: null
}, action) {
  switch (action.type) {
    case a.REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case a.RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        data: action.data,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,
  mainContent
})

export default rootReducer
