import { all } from 'redux-saga/effects'

import { watchGetUsers } from 'ducks/getUsers/sagas'
import { watchGetPosts } from 'ducks/getPosts/sagas'
import { watchAddPost } from 'ducks/addPost/sagas'
import { watchEditPost } from 'ducks/editPost/sagas'
import { watchDeletePost } from 'ducks/deletePost/sagas'

export default function* saga() {
  yield all([
    watchGetUsers(),
    watchGetPosts(),
    watchAddPost(),
    watchEditPost(),
    watchDeletePost(),
  ])
}
