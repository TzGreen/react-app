// @flow

import { API } from 'aws-amplify'
import { apiName } from 'config'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Saga } from 'react-redux'
import {
  addUserFailure,
  addUserRequest,
  addUserSuccess,
  addUserTrigger,
} from './actions'
import type { AddUserPayload } from './types'

function* addUserSaga({ payload }: AddUserPayload): Saga {
  yield put(addUserRequest())

  try {
    const user = yield call([API, 'post'], apiName, `/users`, {
      headers: {},
      body: {
        name: payload.name,
        email: payload.email,
        company: payload.company,
      },
    })

    yield put(
      addUserSuccess({
        ...payload,
        ...user,
        company: { name: payload.company },
      })
    )
  } catch (error) {
    yield put(addUserFailure(error))
  }
}

export function* watchAddUser(): Saga {
  yield takeLatest(addUserTrigger.toString(), addUserSaga)
}
