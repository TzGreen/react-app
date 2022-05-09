// @flow

import { createActions } from 'redux-actions'
import type { User } from './types'

export const {
  getUsersTrigger,
  getUsersRequest,
  getUsersFailure,
  getUsersSuccess,
} = createActions({
  GET_USERS_TRIGGER: undefined,
  GET_USERS_REQUEST: undefined,
  GET_USERS_FAILURE: (error: string) => error,
  GET_USERS_SUCCESS: (data: Array<User>) => data,
})
