import { all } from 'redux-saga/effects'

import { watchGetUsers } from 'ducks/getUsers/sagas'

export default function* saga() {
  yield all([watchGetUsers()])
}
