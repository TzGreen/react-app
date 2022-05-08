// @flow

import { createActions } from 'redux-actions'

export const {
  editPostTrigger,
  editPostRequest,
  editPostFailure,
  editPostSuccess,
  editPostModalTrigger,
} = createActions({
  EDIT_POST_TRIGGER: (data) => data,
  EDIT_POST_REQUEST: undefined,
  EDIT_POST_FAILURE: undefined,
  EDIT_POST_SUCCESS: (data) => data,
  EDIT_POST_MODAL_TRIGGER: (data) => data,
})
