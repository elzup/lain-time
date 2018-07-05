// @flow
import crypto from 'crypto'

import type { ThunkAction, Lain } from '../../types'
import * as actions from './actions'
import * as selectors from './selectors'
import { now } from '../../utils'

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

function makeLain(seedTime: number) {
	const time = seedTime
	const hash = crypto
		.createHash('sha1')
		.update(`${time}`)
		.digest('hex')
	return {
		hash,
		time,
	}
}

export function updateHash({ time }: { time: number }): ThunkAction {
	return async (dispatch, getState) => {
		const lain = makeLain(time)
		await dispatch(actions.updateHome({ lain }))
		dispatch(nextUpdate({ lain }))
	}
}

export function nextUpdate({ lain }: { lain: Lain }): ThunkAction {
	return async (dispatch, getState) => {
		await sleep(1000)
		const time = now()
		document.location.hash = `/${time}`
		dispatch(updateHash({ time }))
	}
}
