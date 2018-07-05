// @flow
import { combineReducers } from './config'
import Lain from './containers/Lain/reducer'
import System from './containers/System/reducer'

export default combineReducers({
	Lain,
	System,
})
