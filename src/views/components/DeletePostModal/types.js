// @flow

import type { Post } from 'ducks/getPosts/types'
import type { DeletePostPayload } from 'ducks/deletePost/types'

export type Props = {
  active: boolean,
  post: Post,
  userId: number,
  className?: string,
  onSubmit: (data: DeletePostPayload) => void,
  onClose: () => void,
}
