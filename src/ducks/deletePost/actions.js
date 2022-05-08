// @flow

import { createActions } from 'redux-actions'

export const {
  deletePostTrigger,
  deletePostRequest,
  deletePostFailure,
  deletePostSuccess,
  deletePostModalTrigger,
} = createActions({
  DELETE_POST_TRIGGER: (data) => data,
  DELETE_POST_REQUEST: undefined,
  DELETE_POST_FAILURE: undefined,
  DELETE_POST_SUCCESS: (data) => data,
  DELETE_POST_MODAL_TRIGGER: (data) => data,
})
