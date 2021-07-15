import * as React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Fact from '../../components/Fact'
import { now, sleep } from '../../utils'
import { makeEgo } from './logic'

export function useConnect(cur: string, delay: number) {
	const history = useHistory()
	React.useEffect(() => {
		sleep(delay).then(() => history.push(`/0/${now()}`))
	}, [cur, delay, history])
}

function LainComponent() {
	const { time } = useParams<{ time: string }>()
	const ego = makeEgo(Number(time))
	useConnect(time, ego.next)

	return <Fact ego={ego} />
}

export default LainComponent
