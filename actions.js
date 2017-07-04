export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_LOGIN = 'UPDATE_LOGIN'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const updateLogin = login => ({
  type: UPDATE_LOGIN,
  login
})

export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  password
})

const requestData = () => ({
  type: REQUEST_DATA
})

const receiveData = data => ({
  type: RECEIVE_DATA,
  data,
  receivedAt: Date.now()
})

const fetchTodayData = () => dispatch => {
  dispatch(requestData())
  return fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today')
    .then(response => response.json(),
          error => console.error('error receiving data', error))
    .then(json => dispatch(receiveData(json)))
}

const shouldFetchData = state => {
  if (!state.data) {
    return true
  }
  if (state.isFetching) {
    return false
  }
  return state.didInvalidate
}

export const fetchDataIfNeeded = () => (dispatch, getState) => {
  console.warn('should fetch data = ' + shouldFetchData(getState().mainContent))
  if (shouldFetchData(getState().mainContent)) {
    return dispatch(fetchTodayData())
  }
}
