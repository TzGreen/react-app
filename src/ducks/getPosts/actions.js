// @flow

import { createActions } from 'redux-actions'
import type { Post } from './types'

export const {
  getPostsTrigger,
  getPostsRequest,
  getPostsFailure,
  getPostsSuccess,
} = createActions({
  GET_POSTS_TRIGGER: (userId: number) => userId,
  GET_POSTS_REQUEST: undefined,
  GET_POSTS_FAILURE: (error: string) => error,
  GET_POSTS_SUCCESS: (data: Array<Post>) => data,
})
