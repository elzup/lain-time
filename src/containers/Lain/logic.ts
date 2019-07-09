import crypto from 'crypto'

import { ThunkAction, Lain } from '../../types'
import * as actions from './actions'
import { now } from '../../utils'
import { getMetas } from '../../utils/meta'

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

function lainSeed(time: number): string {
	return getMetas() + `${time}`
}

function makeLain(time: number): Lain {
	const hash = crypto
		.createHash('sha1')
		.update(lainSeed(time))
		.digest('hex')
	const rands = hash.split('').map(norm)
	return {
		hash,
		time,
		next: getRand(2, 0, rands) * 8000,
		d16: [...Array(40).keys()].map(i => getRand(1, i, rands)),
		d256: [...Array(40).keys()].map(i => getRand(2, i, rands)),
		d4096: [...Array(40).keys()].map(i => getRand(3, i, rands)),
		loaded: true,
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

export function voice(): ThunkAction {
	return async () => {
		console.log('https://github.com/elzup/lain-time')
		console.log('https://twitter.com/_elzup_')
		console.log('https://twitter.com/anozon')
	}
}
