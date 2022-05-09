// @flow

import { createActions } from 'redux-actions'
import type { AddPostPayload } from 'ducks/getPosts/types'

export const {
  addPostTrigger,
  addPostRequest,
  addPostFailure,
  addPostSuccess,
  addPostModalTrigger,
} = createActions({
  ADD_POST_TRIGGER: (data: AddPostPayload) => data,
  ADD_POST_REQUEST: undefined,
  ADD_POST_FAILURE: (error: string) => error,
  ADD_POST_SUCCESS: (data: AddPostPayload) => data,
  ADD_POST_MODAL_TRIGGER: (userId: number) => userId,
})
