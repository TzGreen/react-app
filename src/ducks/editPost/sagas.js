// @flow

import { API } from 'aws-amplify'
import { apiName } from 'config'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Saga } from 'react-redux'
import {
  editPostFailure,
  editPostRequest,
  editPostSuccess,
  editPostTrigger,
} from './actions'

import type { EditPostPayload } from './types'

function* editPostSaga({ payload }: EditPostPayload): Saga {
  yield put(editPostRequest())

  try {
    yield call([API, 'put'], apiName, `/posts/${payload.id}`, {
      headers: {},
      body: {
        title: payload.title,
        body: payload.body,
      },
    })

    yield put(editPostSuccess(payload))
  } catch (error) {
    yield put(editPostFailure(error))
  }
}

export function* watchEditPost(): Saga {
  yield takeLatest(editPostTrigger.toString(), editPostSaga)
}
