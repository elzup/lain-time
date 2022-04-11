import { NumberParam, useQueryParam } from 'use-query-params'
import { sign } from '../utils'

export function useQ() {
	const [q, setQ] = useQueryParam('q', NumberParam)
	const inc = () => setQ(sign())

	return { q, inc }
}
