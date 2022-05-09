// @flow

import type { Post } from 'ducks/getPosts/types'
import type { EditPostPayload } from 'ducks/editPost/types'

export type Props = {
  active: boolean,
  post: Post,
  userId: number,
  className?: string,
  onSubmit: (data: EditPostPayload) => void,
  onClose: () => void,
}
