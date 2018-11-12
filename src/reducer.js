// @flow
import { combineReducers } from 'redux'
import Lain from './containers/Lain/reducer'
import System from './containers/System/reducer'

export default combineReducers({
	Lain,
	System,
})
