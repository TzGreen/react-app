// @flow

import { API } from 'aws-amplify'
// import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Saga } from 'react-redux'
import {
  getPostsFailure,
  getPostsRequest,
  getPostsSuccess,
  getPostsTrigger,
} from './actions'

function* getPostsSaga({ payload }): Saga {
  yield put(getPostsRequest())

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
      `/posts?userId=${payload}`,
      {
        headers: {},
        body: {},
      }
    )

    // if (res && res.data) {
    yield put(getPostsSuccess({ userId: payload, data: usersList }))

    // to support sign in in all windows
  } catch (error) {
    yield put(getPostsFailure(error))
  }
}

export function* watchGetPosts(): Saga {
  yield takeLatest(getPostsTrigger.toString(), getPostsSaga)
}
