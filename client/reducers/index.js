import { combineReducers } from 'redux'

import trips from './trips';
import user from './user'

export default combineReducers({
  trips,
  user
})
