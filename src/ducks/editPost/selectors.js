// @flow

import type { State } from 'ducks/editPost/types'

export const moduleName = 'editPost'
export const editPostStateSelector = (state: Object): State => state[moduleName]
