// @flow

import type { State } from 'ducks/deletePost/types'

export const moduleName = 'deletePost'
export const deletePostStateSelector = (state: Object): State =>
  state[moduleName]
