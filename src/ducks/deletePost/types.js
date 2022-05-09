// @flow

import type { Post } from 'ducks/getPosts/types'

export type State = {
  loading: boolean,
  error: null | string,
  userId: null | number,
  postId: null | number,
  isModalOpen: boolean,
}

export type DeletePostPayload = Post & {
  userId: number,
}

export type DeletePostModalPayload = {
  userId: number,
  postId: number,
}

export type DeletePost = {
  userId: number,
  id: number,
}
