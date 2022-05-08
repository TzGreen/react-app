// @flow

import Amplify, { API } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { apiName, apiURL } from 'config'
import { configureStore } from './redux/store'
import Root from './app/Root'
import './styles/main.scss'
import * as serviceWorker from './serviceWorker'

Amplify.configure({
  Auth: null,
  API: {
    endpoints: [
      {
        name: apiName,
        endpoint: apiURL,
      },
    ],
  },
})
API.configure()

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
