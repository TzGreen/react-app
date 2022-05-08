// @flow

import { API } from 'aws-amplify'
import { apiName } from 'config'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { Saga } from 'react-redux'
import {
  getUsersFailure,
  getUsersRequest,
  getUsersSuccess,
  getUsersTrigger,
} from './actions'
import { getUsersStateSelector } from './selectors'

function* getUsersSaga(): Saga {
  const getUsersState = yield select(getUsersStateSelector)
  if (getUsersState.data) return

  yield put(getUsersRequest())

  try {
    const usersList = yield call([API, 'get'], apiName, '/users', {
      headers: {},
      body: {},
    })
    yield put(getUsersSuccess(usersList))
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

export function* watchGetUsers(): Saga {
  yield takeLatest(getUsersTrigger.toString(), getUsersSaga)
}
