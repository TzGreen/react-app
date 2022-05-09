// @flow

import type { State } from 'ducks/addUser/types'

export const moduleName = 'addUser'
export const addUserStateSelector = (state: Object): State => state[moduleName]
