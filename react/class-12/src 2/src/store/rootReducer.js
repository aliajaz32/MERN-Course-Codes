import adReducer from './ads/adReducer'
import userReducer from './users/userReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  adReducer,
  userReducer
})