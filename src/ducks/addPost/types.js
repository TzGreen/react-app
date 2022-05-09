// @flow

import type { Post } from 'ducks/getPosts/types'

export type State = {
  loading: boolean,
  error: null | string,
  userId: null | number,
  isModalOpen: boolean,
}

export type AddPostPayload = Post & {
  userId: number,
}
