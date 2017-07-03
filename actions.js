export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_LOGIN = 'UPDATE_LOGIN'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'

const updateLogin = login => ({
  type: UPDATE_LOGIN,
  login
})

const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  password
})

export const mapDispatchToProps = dispatch => ({
  updateLogin: login => {
    dispatch(updateLogin(login))
  },
  updatePassword: password => {
    dispatch(updatePassword(password))
  },
  doLogin: () => {
    dispatch({type: LOGIN})
  }
})
