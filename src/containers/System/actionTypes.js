// @flow
export const FREEZE_TIME: 'System/FREEZE_TIME' = 'System/FREEZE_TIME'
export const CONSCIOUSNESS_TIME: 'System/CONSCIOUSNESS_TIME' =
	'System/CONSCIOUSNESS_TIME'

export const Actions = {
	FREEZE_TIME,
	CONSCIOUSNESS_TIME,
}

export type FreezeTime = {
	type: typeof FREEZE_TIME,
}

export type ConsciousnessTime = {
	type: typeof CONSCIOUSNESS_TIME,
}

export type Action = FreezeTime | ConsciousnessTime
