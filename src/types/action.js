// @flow
import type { Action as LainAction } from '../containers/Lain/actionTypes'
import type { Action as SystemAction } from '../containers/System/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action = ReduxInitAction | LainAction | SystemAction
