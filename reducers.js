import { combineReducers } from 'redux'
import * as a from './actions'

function loggedIn (state = false, action) {
  switch (action.type) {
    case a.LOGIN:
      return isValidUser(action.creds)
    case a.LOGOUT:
      return false
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
  loggedIn,
  mainContent
})

export default rootReducer
