// @flow

import type { Post } from 'ducks/getPosts/types'

export type Props = Post & {
  userId: number,
}
