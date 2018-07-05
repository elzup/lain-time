// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { type Match, type RouterHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import NavBar from '../NavBarContainer'

import type { State, Lain } from '../../types'
import { getLain } from './selectors'
import { updateHash } from './logic'

type OProps = {
	match: Match,
	history: RouterHistory,
}

type Props = {
	lain: ?Lain,
	time: number,
	updateHash: typeof updateHash,
}

const C = (props: Props) => (
	<div>
		<NavBar />
		<Grid container justify="center" style={{ marginBottom: '100px' }}>
			<Grid item xs={12} md={10}>
				<div>{JSON.stringify(props.lain)}</div>
			</Grid>
		</Grid>
	</div>
)

class Container extends React.Component<Props> {
	componentDidMount() {
		const { updateHash, time } = this.props
		updateHash({ time })
	}
	render() {
		debugger
		return C(this.props)
	}
}

const ms = (state: State, op: OProps) => {
	const { time } = op.match.params
	return { lain: getLain(state), time: Number(time) }
}

const conn = connect(
	ms,
	{ updateHash },
)

export default conn(Container)
