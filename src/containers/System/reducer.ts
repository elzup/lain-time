import { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = {
	hasTime: boolean
}

export const initialState: State = {
	hasTime: false,
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.CONSCIOUSNESS_TIME:
			return {
				...state,
				hasTime: true,
			}

		case Actions.FREEZE_TIME:
			return {
				...state,
				hasTime: false,
			}

		default:
			return state
	}
}
