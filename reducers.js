import { combineReducers } from 'redux'
import * as a from './actions'

const LOGINS = {
  'user1': 'pass1',
  'user2': 'pass2'
}

const isValidUser = ({login, password}) =>
  LOGINS[login] === password

function user (state = {
  login: '',
  password: '',
  loggedIn: false
}, action) {
  switch (action.type) {
    case a.UPDATE_LOGIN:
      return {
        ...state,
        login: action.login
      }
    case a.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case a.LOGIN:
      return {
        ...state,
        loggedIn: isValidUser(state)
      }
    case a.LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}

function mainContent (state = {
  isFetching: false,
  didInvalidate: false,
  data: {}
}, action) {
  switch (action.type) {
    case a.FETCH:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
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
