// @flow
import _ from 'lodash'
import moment from 'moment'
import crypto from 'crypto'

import type { ThunkAction } from '../../types'
import parser from '../../parser'
import * as actions from './actions'
import * as selectors from './selectors'

function makeHash(seedTime?: number) {
	const time = seedTime || new Date().getTime()
	return {
		hash: crypto
			.createHash('sha1')
			.update(`${time}`)
			.digest('hex'),
		time,
	}
}

export function updateHash({ seedTime }: { seedTime?: number }): ThunkAction {
	return async (dispatch, getState) => {
		await dispatch(actions.updateHome({}))
	}
}
