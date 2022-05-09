// @flow

import type { AddPostPayload } from 'ducks/addPost/types'

export type Props = {
  active: boolean,
  userId: number,
  className?: string,
  onSubmit: (data: AddPostPayload) => void,
  onClose: () => void,
}
