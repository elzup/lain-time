import { createBrowserHistory } from 'history'
import React, { useEffect } from 'react'
import { useQ } from '../../hooks'
import Lain from '../Lain'

export const history = createBrowserHistory()

const RouteApp = () => {
	const { q, inc } = useQ()

	useEffect(() => {
		if (typeof q === 'number') return
		inc()
	}, [q])

	return <Lain />
}
export default RouteApp
