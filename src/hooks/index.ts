import { NumberParam, useQueryParam } from 'use-query-params'
import { now } from '../utils'

export function useQ() {
	const [q, setQ] = useQueryParam('q', NumberParam)

	const inc = () => setQ(now())

	return { q, inc }
}
