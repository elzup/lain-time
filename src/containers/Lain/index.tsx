import * as React from 'react'
import { connect } from 'react-redux'
import { Match, RouterHistory } from 'react-router-dom'

import { State, Lain } from '../../types'
import { getLain } from './selectors'
import { updateHash, voice } from './logic'
import Fact from '../../components/Fact'

type OProps = {
	match: Match
}
type Props = {
	lain: Lain | null
	time: number
	history: RouterHistory
	updateHash: (time: number) => void
	voice: () => void
}

class Container extends React.Component<Props> {
	componentDidMount() {
		const { updateHash, time, voice } = this.props
		voice()
		updateHash({ time })
	}
	render() {
		const { props } = this
		if (!props.lain || !props.lain.loaded) {
			return null
		}
		return <Fact lain={props.lain} />
	}
}

const ms = (state: State, op: OProps) => {
	const { time } = op.match.params
	return { lain: getLain(state), time: Number(time) }
}

const conn = connect(
	ms,
	{ updateHash, voice }
)

export default conn(Container)
