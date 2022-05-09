// @flow

import type { Post } from 'ducks/getPosts/types'

export type State = {
  loading: boolean,
  error: null | string,
  userId: null | number,
  postId: null | number,
  isModalOpen: boolean,
}

export type EditPostPayload = Post & {
  userId: number,
}

export type EditPostModalPayload = {
  userId: number,
  postId: number,
}
