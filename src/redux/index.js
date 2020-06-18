import { combineReducers } from 'redux'

import appStateReducer from './appState/reducer'
import productReducer from './productState/reducer'

export default combineReducers({
  appStateReducer,
  productReducer
})
