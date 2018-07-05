// @flow
import type { Home } from '../../types'

export const UPDATE_HOME: 'HomeContainer/UPDATE_HOME' =
	'HomeContainer/UPDATE_HOME'

export const Actions = {
	UPDATE_HOME,
}

export type UpdateHome = {
	type: typeof UPDATE_HOME,
	home: $Shape<Home>,
}

export type Action = UpdateHome
