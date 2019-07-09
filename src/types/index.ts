
import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import { Action as _Action } from './action'
import { State as _State } from './state'

export type State = _State
export type Action = _Action

export type Reducer = (state: State, action: Action) => State
export type Reducers = {
	[key: string]: Reducer,
}

export type GetState = () => State

export type ThunkAction = (
	dispatch: ReduxDispatch<*>,
	getState: GetState,
) => void | Promise<void>

type ThunkDispatch<A> = (ta: ThunkAction) => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>

export type Lain = {
	hash: string,
	time: number,
	next: number,
	d16: number[],
	d256: number[],
	d4096: number[],
	loaded: boolean,
}

export type Home = {
	lain: Lain,
}
