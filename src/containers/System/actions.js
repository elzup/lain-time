// @flow
import { FREEZE_TIME, CONSCIOUSNESS_TIME } from './actionTypes'
import type { FreezeTime, ConsciousnessTime } from './actionTypes'

export function freezeTime(): FreezeTime {
	return {
		type: FREEZE_TIME,
	}
}
export function consciousnessTime(): ConsciousnessTime {
	return {
		type: CONSCIOUSNESS_TIME,
	}
}
