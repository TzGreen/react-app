// @flow

import { createActions } from 'redux-actions'
import type { EditPostModalPayload, EditPostPayload } from './types'

export const {
  editPostTrigger,
  editPostRequest,
  editPostFailure,
  editPostSuccess,
  editPostModalTrigger,
} = createActions({
  EDIT_POST_TRIGGER: (data: EditPostPayload) => data,
  EDIT_POST_REQUEST: undefined,
  EDIT_POST_FAILURE: (error: string) => error,
  EDIT_POST_SUCCESS: (data: EditPostPayloa) => data,
  EDIT_POST_MODAL_TRIGGER: (payload: EditPostModalPayload) => payload,
})
