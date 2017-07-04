import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers'

const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

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
