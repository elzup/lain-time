// @flow
import type { State as Lain } from '../containers/Lain/reducer'
import type { State as System } from '../containers/System/reducer'

export type State = {
	Lain: Lain,
	System: System,
}
