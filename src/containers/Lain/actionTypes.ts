import { Home } from '../../types'

export const UPDATE_HOME: 'Lain/UPDATE_HOME' = 'Lain/UPDATE_HOME'

export const Actions = {
	UPDATE_HOME,
}

export type UpdateHome = {
	type: typeof UPDATE_HOME
	home: Partial<Home>
}

export type Action = UpdateHome
