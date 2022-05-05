// @flow

import { handleActions } from 'redux-actions'
import { getUsersFailure, getUsersRequest, getUsersSuccess } from './actions'

import type { State } from './types'

const initialState: State = {
  loading: false,
  error: null,
  data: null,
}

const getUsersReducer = handleActions(
  {
    [getUsersRequest]: () => ({
      loading: true,
      error: null,
    }),

    [getUsersFailure]: (action) => ({
      loading: false,
      error: action.payload,
    }),

    [getUsersSuccess]: (state: State, action) => ({
      loading: false,
      data: action.payload,
    }),
  },
  initialState
)

export default getUsersReducer
