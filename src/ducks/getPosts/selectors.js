// @flow

import type { State } from 'ducks/getPosts/types'

export const moduleName = 'getPosts'
export const getPostsStateSelector = (state: Object): State => state[moduleName]
