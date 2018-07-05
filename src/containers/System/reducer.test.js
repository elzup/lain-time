// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle FREEZE_TIME', () => {
	expect(reducer(initialState, actions.freezeTime())).toEqual({})
})

test('handle RECEIVE_ITEM', () => {
	expect(reducer(initialState, actions.receiveItem())).toEqual({})
})

test('handle DELETE_ITEM', () => {
	expect(reducer(initialState, actions.deleteItem())).toEqual({})
})

test('handle CONSCIOUSNESS_TIME', () => {
	expect(reducer(initialState, actions.consciousnessTime())).toEqual({})
})
