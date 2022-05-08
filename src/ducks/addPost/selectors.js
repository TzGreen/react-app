// @flow

import type { State } from 'ducks/addPost/types'

export const moduleName = 'addPost'
export const addPostStateSelector = (state: Object): State => state[moduleName]
