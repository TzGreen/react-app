// @flow

import { API } from 'aws-amplify'
// import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Saga } from 'react-redux'
import {
  getUsersFailure,
  getUsersRequest,
  getUsersSuccess,
  getUsersTrigger,
} from './actions'

function* getUsersSaga(): Saga {
  yield put(getUsersRequest())

  //   const apiURL = 'https://jsonplaceholder.typicode.com'
  const apiName = 'jsonplaceholder'

  try {
    // const options = {
    //   method: 'get',
    //   url: `${apiURL}/users`,
    //   data: {},
    // }

    const usersList = yield call(
      [API, 'get'],
      //   axios,
      //   options
      apiName,
      '/users',
      {
        headers: {},
        body: {},
      }
    )

    // if (res && res.data) {
    yield put(getUsersSuccess(usersList))

    // to support sign in in all windows
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

export function* watchGetUsers(): Saga {
  yield takeLatest(getUsersTrigger.toString(), getUsersSaga)
}
