import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import reducer from './reducer'

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, applyMiddleware(sagaMiddleware))

  store.runSaga = () => {
    if (store.saga) return
    store.saga = sagaMiddleware.run(saga)
  }

  store.runSaga()

  return store
}
