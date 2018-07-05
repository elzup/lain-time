// @flow
import type { Action, Home } from '../../types'
import { Actions } from './actionTypes'

export type State = Home

export const initialState: State = {
	lain: {
		hash: '',
		time: 0,
		next: 0,
	},
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_HOME:
			return { ...state, ...action.home }

		default:
			return state
	}
}
