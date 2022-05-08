// @flow

import { API } from 'aws-amplify'
import { apiName } from 'config'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Saga } from 'react-redux'
import {
  addPostFailure,
  addPostRequest,
  addPostSuccess,
  addPostTrigger,
} from './actions'

function* addPostSaga({ payload }): Saga {
  yield put(addPostRequest())

  try {
    const post = yield call([API, 'post'], apiName, `/posts`, {
      headers: {},
      body: {
        title: payload.title,
        body: payload.body,
      },
    })

    yield put(addPostSuccess({ ...payload, ...post }))
  } catch (error) {
    yield put(addPostFailure(error))
  }
}

export function* watchAddPost(): Saga {
  yield takeLatest(addPostTrigger.toString(), addPostSaga)
}
