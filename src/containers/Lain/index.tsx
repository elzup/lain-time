import * as React from 'react'
import Fact from '../../components/Fact'
import { useQ } from '../../hooks'
import { sleep } from '../../utils'
import { makeEgo } from './logic'

export function useConnect(cur: string, delay: number) {
	const { inc } = useQ()
	React.useEffect(() => {
		sleep(delay).then(() => inc())
	}, [cur, delay])
}

function LainComponent() {
	const { q } = useQ()
	const ego = makeEgo(Number(q))
	useConnect(String(q), ego.next)
	console.log(ego)

	return <Fact ego={ego} />
}

export default LainComponent
