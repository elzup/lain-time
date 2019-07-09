import { Action as LainAction } from '../containers/Lain/actionTypes'
import { Action as SystemAction } from '../containers/System/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT'
}

export type Action = ReduxInitAction | LainAction | SystemAction
