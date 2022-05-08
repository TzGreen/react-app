import { combineReducers } from 'redux'

import getUsersReducer from 'ducks/getUsers/reducer'
import { moduleName as getUsersModule } from 'ducks/getUsers/selectors'

import getPostsReducer from 'ducks/getPosts/reducer'
import { moduleName as getPostsModule } from 'ducks/getPosts/selectors'

import addPostReducer from 'ducks/addPost/reducer'
import { moduleName as addPostModule } from 'ducks/addPost/selectors'

import editPostReducer from 'ducks/editPost/reducer'
import { moduleName as editPostModule } from 'ducks/editPost/selectors'

import deletePostReducer from 'ducks/deletePost/reducer'
import { moduleName as deletePostModule } from 'ducks/deletePost/selectors'

export default combineReducers({
  [getUsersModule]: getUsersReducer,
  [getPostsModule]: getPostsReducer,
  [addPostModule]: addPostReducer,
  [editPostModule]: editPostReducer,
  [deletePostModule]: deletePostReducer,
})
