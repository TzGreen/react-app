// @flow

import { handleActions } from 'redux-actions'
import {
  addPostFailure,
  addPostModalTrigger,
  addPostRequest,
  addPostSuccess,
} from './actions'

import type { State } from './types'

const initialState: State = {
  loading: false,
  error: null,
  userId: null,
  isModalOpen: false,
}

const addPostReducer = handleActions(
  {
    [addPostRequest]: (state: State) => ({
      ...state,
      loading: true,
      error: null,
    }),

    [addPostFailure]: (state: State, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [addPostSuccess]: () => ({
      error: null,
      loading: false,
      userId: null,
      isModalOpen: false,
    }),

    [addPostModalTrigger]: (state: State, action) => ({
      ...state,
      userId: action.payload,
      isModalOpen: !state.isModalOpen,
    }),
  },
  initialState
)

export default addPostReducer
