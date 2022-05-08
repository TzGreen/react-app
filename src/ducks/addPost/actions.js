// @flow

import { createActions } from 'redux-actions'

export const {
  addPostTrigger,
  addPostRequest,
  addPostFailure,
  addPostSuccess,
  addPostModalTrigger,
} = createActions({
  ADD_POST_TRIGGER: (data) => data,
  ADD_POST_REQUEST: undefined,
  ADD_POST_FAILURE: undefined,
  ADD_POST_SUCCESS: (data) => data,
  ADD_POST_MODAL_TRIGGER: (userId: number) => userId,
})
