// @flow

import { createActions } from 'redux-actions'
import type { User } from 'ducks/getUsers/types'
import type { AddUserPayload } from './types'

export const {
  addUserTrigger,
  addUserRequest,
  addUserFailure,
  addUserSuccess,
  addUserModalTrigger,
} = createActions({
  ADD_USER_TRIGGER: (data: AddUserPayload) => data,
  ADD_USER_REQUEST: undefined,
  ADD_USER_FAILURE: (error: string) => error,
  ADD_USER_SUCCESS: (data: User) => data,
  ADD_USER_MODAL_TRIGGER: undefined,
})
