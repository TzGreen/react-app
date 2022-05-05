import { combineReducers } from 'redux'

import getUsersReducer from 'ducks/getUsers/reducer'
import { moduleName as getUsersModule } from 'ducks/getUsers/selectors'

export default combineReducers({
  [getUsersModule]: getUsersReducer,
})
