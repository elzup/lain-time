// @flow
import type { Home } from '../../types'

import { UPDATE_HOME } from './actionTypes'
import type { UpdateHome } from './actionTypes'

export function updateHome(home: $Shape<Home>): UpdateHome {
	return {
		type: UPDATE_HOME,
		home,
	}
}
