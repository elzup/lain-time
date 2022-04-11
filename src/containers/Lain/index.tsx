import React, { useEffect } from 'react'
import Fact from '../../components/Fact'
import { useQ } from '../../hooks'
import { look } from '../../utils'
import { makeEgo } from './logic'

export function useConnect(cur: string, delay: number) {
	const { inc } = useQ()
	useEffect(() => {
		console.log('effect')

		const { info, del } = look(Math.floor(delay))
		info().then(inc)
		return () => {
			del && clearTimeout(del)
		}
	}, [cur, delay, inc])
}

function LainComponent() {
	const { q } = useQ()
	const ego = makeEgo(Number(q))

	useConnect(String(q), ego.next)

	return <Fact ego={ego} />
}

export default LainComponent
