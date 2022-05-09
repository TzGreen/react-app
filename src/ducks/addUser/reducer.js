// @flow

import { handleActions } from 'redux-actions'
import {
  addUserFailure,
  addUserModalTrigger,
  addUserRequest,
  addUserSuccess,
} from './actions'

import type { State } from './types'

const initialState: State = {
  loading: false,
  error: null,
  isModalOpen: false,
}

const addUserReducer = handleActions(
  {
    [addUserRequest]: (state: State) => ({
      ...state,
      loading: true,
      error: null,
    }),

    [addUserFailure]: (state: State, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [addUserSuccess]: () => ({
      error: null,
      loading: false,
      isModalOpen: false,
    }),

    [addUserModalTrigger]: (state: State) => ({
      ...state,
      isModalOpen: !state.isModalOpen,
    }),
  },
  initialState
)

export default addUserReducer
