// @flow
import { combineReducers } from './config'
import HomeContainer from './containers/HomeContainer/reducer'
import LogContainer from './containers/LogContainer/reducer'
import Network from './containers/Network/reducer'
import System from './containers/System/reducer'

export default combineReducers({
	HomeContainer,
	LogContainer,
	Network,
	System,
})
