import { combineReducers } from 'redux'

import getUsersReducer from 'ducks/getUsers/reducer'
import { moduleName as getUsersModule } from 'ducks/getUsers/selectors'

import getPostsReducer from 'ducks/getPosts/reducer'
import { moduleName as getPostsModule } from 'ducks/getPosts/selectors'

export default combineReducers({
  [getUsersModule]: getUsersReducer,
  [getPostsModule]: getPostsReducer,
})
