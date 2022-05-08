// @flow

import { handleActions } from 'redux-actions'
import {
  editPostFailure,
  editPostModalTrigger,
  editPostRequest,
  editPostSuccess,
} from './actions'

import type { State } from './types'

const initialState: State = {
  loading: false,
  error: null,
  userId: null,
  postId: null,
  isModalOpen: false,
}

const editPostReducer = handleActions(
  {
    [editPostRequest]: (state: State) => ({
      ...state,
      loading: true,
      error: null,
    }),

    [editPostFailure]: (state: State, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [editPostSuccess]: () => ({
      error: null,
      loading: false,
      userId: null,
      postId: null,
      isModalOpen: false,
    }),

    [editPostModalTrigger]: (state: State, action) => ({
      ...state,
      userId: action.payload.userId,
      postId: action.payload.postId,
      isModalOpen: !state.isModalOpen,
    }),
  },
  initialState
)

export default editPostReducer
