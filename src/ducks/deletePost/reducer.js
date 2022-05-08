// @flow

import { handleActions } from 'redux-actions'
import {
  deletePostFailure,
  deletePostModalTrigger,
  deletePostRequest,
  deletePostSuccess,
} from './actions'

import type { State } from './types'

const initialState: State = {
  loading: false,
  error: null,
  userId: null,
  postId: null,
  isModalOpen: false,
}

const deletePostReducer = handleActions(
  {
    [deletePostRequest]: (state: State) => ({
      ...state,
      loading: true,
      error: null,
    }),

    [deletePostFailure]: (state: State, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [deletePostSuccess]: () => ({
      error: null,
      loading: false,
      userId: null,
      postId: null,
      isModalOpen: false,
    }),

    [deletePostModalTrigger]: (state: State, action) => ({
      ...state,
      userId: action.payload.userId,
      postId: action.payload.postId,
      isModalOpen: !state.isModalOpen,
    }),
  },
  initialState
)

export default deletePostReducer
