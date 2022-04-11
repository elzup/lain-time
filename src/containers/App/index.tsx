import React, { useEffect } from 'react'
import { useQ } from '../../hooks'
import Lain from '../Lain'

const RouteApp = () => {
	const { q, inc } = useQ()

	useEffect(() => {
		if (typeof q === 'number') return
		inc()
	}, [q])

	return <Lain />
}
export default RouteApp
