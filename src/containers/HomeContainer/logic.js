// @flow
import _ from 'lodash'
import moment from 'moment'
import crypto from 'crypto'

import type { ThunkAction } from '../../types'
import * as actions from './actions'
import * as selectors from './selectors'

function makeLain(seedTime: number) {
	const time = seedTime
	return {
		hash: crypto
			.createHash('sha1')
			.update(`${time}`)
			.digest('hex'),
		time,
	}
}

export function updateHash({ time }: { time: number }): ThunkAction {
	return async (dispatch, getState) => {
		const lain = makeLain(time)
		await dispatch(actions.updateHome({ lain }))
	}
}
