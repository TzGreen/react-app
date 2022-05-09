// @flow

import type { AddUserPayload } from 'ducks/addUser/types'

export type Props = {
  active: boolean,
  className?: string,
  onSubmit: (data: AddUserPayload) => void,
  onClose: () => void,
}
