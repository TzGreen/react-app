// @flow

import { API } from 'aws-amplify'
import { apiName } from 'config'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Saga } from 'react-redux'
import {
  deletePostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostTrigger,
} from './actions'

import type { DeletePostPayload } from './types'

function* deletePostSaga({ payload }: DeletePostPayload): Saga {
  yield put(deletePostRequest())

  try {
    yield call([API, 'del'], apiName, `/posts/${payload.id}`, {
      headers: {},
      body: {},
    })

    yield put(deletePostSuccess(payload))
  } catch (error) {
    yield put(deletePostFailure(error))
  }
}

export function* watchDeletePost(): Saga {
  yield takeLatest(deletePostTrigger.toString(), deletePostSaga)
}
