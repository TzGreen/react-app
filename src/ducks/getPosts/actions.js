// @flow

import { createActions } from 'redux-actions'

export const {
  getPostsTrigger,
  getPostsRequest,
  getPostsFailure,
  getPostsSuccess,
} = createActions({
  GET_POSTS_TRIGGER: (userId) => userId,
  GET_POSTS_REQUEST: undefined,
  GET_POSTS_FAILURE: undefined,
  GET_POSTS_SUCCESS: (data) => data,
})
