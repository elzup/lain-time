import * as React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Fact from '../../components/Fact'
import { now } from '../../utils'
import { makeEgo } from './logic'

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec))

function LainComponent() {
	const history = useHistory()
	const { time } = useParams<{ time: string }>()
	const ego = makeEgo(Number(time))
	React.useEffect(() => {
		sleep(ego.next).then(() => history.push(`/0/${now()}`))
	}, [time, ego.next, history])
	return <Fact ego={ego} />
}

export default LainComponent
