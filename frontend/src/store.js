import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const inititalState = {
  user: null,
  serverHost: 'localhost:3100',
  location: 'sofia,bg'
}

const store = createStore(
  rootReducer,
  inititalState,
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
