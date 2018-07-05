// @flow
import crypto from 'crypto'

import type { ThunkAction, Lain } from '../../types'
import * as actions from './actions'
import { now } from '../../utils'

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

const getRand = (dpi: number, offset: number, rands: number[]) => {
	const l = rands.length
	let v = 0
	for (var i = 0; i < dpi; i++) {
		const r = rands[(i + offset) % l]
		// 1 / 16
		v += Math.pow(0.0625, i) * r
	}
	return v
}
const norm = v => parseInt(v, 16) / 16

function makeLain(seedTime: number): Lain {
	const time = seedTime
	const hash = crypto
		.createHash('sha1')
		.update(`${time}`)
		.digest('hex')
	const rands = hash.split('').map(norm)
	return {
		hash,
		time,
		next: getRand(2, 0, rands) * 8000,
	}
}

export function updateHash({ time }: { time: number }): ThunkAction {
	return async (dispatch, getState) => {
		const lain = makeLain(time)
		document.location.hash = `/0/${time}`
		await dispatch(actions.updateHome({ lain }))
		dispatch(nextUpdate({ lain }))
	}
}

export function nextUpdate({ lain }: { lain: Lain }): ThunkAction {
	return async (dispatch, getState) => {
		await sleep(lain.next)
		const time = now()
		dispatch(updateHash({ time }))
	}
}
