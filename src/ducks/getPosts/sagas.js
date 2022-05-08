// @flow

import { API } from 'aws-amplify'
import { apiName } from 'config'
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

  try {
    const postsList = yield call(
      [API, 'get'],
      apiName,
      `/posts?userId=${payload}`,
      {
        headers: {},
        body: {},
      }
    )

    yield put(getPostsSuccess({ userId: payload, data: postsList }))
  } catch (error) {
    yield put(getPostsFailure(error))
  }
}

export function* watchGetPosts(): Saga {
  yield takeLatest(getPostsTrigger.toString(), getPostsSaga)
}
