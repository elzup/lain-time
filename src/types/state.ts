import { State as Lain } from '../containers/Lain/reducer'
import { State as System } from '../containers/System/reducer'

export type State = {
	Lain: Lain
	System: System
}
