import { all } from 'redux-saga/effects'

import { watchGetUsers } from 'ducks/getUsers/sagas'
import { watchGetPosts } from 'ducks/getPosts/sagas'

export default function* saga() {
  yield all([watchGetUsers(), watchGetPosts()])
}
