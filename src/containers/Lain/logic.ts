import sha1 from 'crypto-js/sha1'
import _ from 'lodash'
import { Ego } from '../../types'
import { getMetas } from '../../utils/meta'

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
const norm = (v) => parseInt(v, 16) / 16

function lainSeed(time: number): string {
	return getMetas() + `${time}`
}

const makeHash = (s: string) => sha1(s).toString()

export function makeEgo(time: number): Ego {
	const hash = makeHash(lainSeed(time))
	const rands = hash.split('').map(norm)
	return {
		hash,
		time,
		next: getRand(2, 0, rands) * 8000,
		d16: _.range(40).map((i) => getRand(1, i, rands)),
		d256: _.range(40).map((i) => getRand(2, i, rands)),
		d4096: _.range(40).map((i) => getRand(3, i, rands)),
		loaded: true,
	}
}

export function voice() {
	console.log('https://github.com/elzup/lain-time')
	console.log('https://twitter.com/_elzup_')
	console.log('https://twitter.com/anozon')
}
