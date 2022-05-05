// @flow

import { handleActions } from 'redux-actions'
import { getPostsFailure, getPostsRequest, getPostsSuccess } from './actions'

import type { State } from './types'

const initialState: State = {
  loading: false,
  error: null,
  data: null,
  userId: null,
}

const getPostsReducer = handleActions(
  {
    [getPostsRequest]: () => ({
      loading: true,
      error: null,
    }),

    [getPostsFailure]: (action) => ({
      loading: false,
      error: action.payload,
    }),

    [getPostsSuccess]: (state: State, action) => ({
      loading: false,
      data: action.payload.data,
      userId: action.payload.userId,
    }),
  },
  initialState
)

export default getPostsReducer
