// @flow

import { createActions } from 'redux-actions'

export const {
  getUsersTrigger,
  getUsersRequest,
  getUsersFailure,
  getUsersSuccess,
} = createActions({
  GET_USERS_TRIGGER: undefined,
  GET_USERS_REQUEST: undefined,
  GET_USERS_FAILURE: undefined,
  GET_USERS_SUCCESS: (data) => data,
})
