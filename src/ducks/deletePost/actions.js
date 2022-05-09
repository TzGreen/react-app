// @flow

import { createActions } from 'redux-actions'
import type {
  DeletePost,
  DeletePostModalPayload,
  DeletePostPayload,
} from './types'

export const {
  deletePostTrigger,
  deletePostRequest,
  deletePostFailure,
  deletePostSuccess,
  deletePostModalTrigger,
} = createActions({
  DELETE_POST_TRIGGER: (data: DeletePostPayload) => data,
  DELETE_POST_REQUEST: undefined,
  DELETE_POST_FAILURE: (error: string) => error,
  DELETE_POST_SUCCESS: (data: DeletePost) => data,
  DELETE_POST_MODAL_TRIGGER: (payload: DeletePostModalPayload) => payload,
})
