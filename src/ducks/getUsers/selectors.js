// @flow

import type { State } from 'ducks/getUsers/types'

export const moduleName = 'getUsers'
export const getUsersStateSelector = (state: Object): State => state[moduleName]
