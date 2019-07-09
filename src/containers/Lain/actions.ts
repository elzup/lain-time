import { Home } from '../../types'

import { UPDATE_HOME } from './actionTypes'
import { UpdateHome } from './actionTypes'

export function updateHome(home: Partial<Home>): UpdateHome {
	return {
		type: UPDATE_HOME,
		home,
	}
}
