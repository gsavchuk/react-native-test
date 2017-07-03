import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers'

const store = createStore(reducer)

const usubscribe = store.subscribe(() => {
  // console.warn(store.getState().user.login)
})

export default (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
