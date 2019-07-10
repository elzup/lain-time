import * as React from 'react'
import Fact from '../../components/Fact'
import useRouter from '../App/useRouter'
import { makeEgo } from './logic'
import { now } from '../../utils'

type Props = {}
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

function LainComponent(props: Props) {
	const {
		match: {
			params: { time },
		},
		history: { push },
	} = useRouter<{ time: number }>()
	const ego = makeEgo(time)
	React.useEffect(() => {
		sleep(ego.next).then(() => push(`/0/${now()}`))
	}, [time, push, ego.next])
	return <Fact ego={ego} />
}

export default LainComponent
