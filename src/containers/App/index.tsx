import React, { useEffect } from 'react'
import { QueryParamProvider } from 'use-query-params'
import { useQ } from '../../hooks'
import Lain from '../Lain'
import { Router, globalHistory, RouteComponentProps } from '@reach/router'

const Zero = (props: RouteComponentProps) => {
	const { q, inc } = useQ()

	useEffect(() => {
		if (typeof q === 'number') return
		inc()
	}, [q])

	return <Lain />
}

const RouteApp = () => {
	return (
		<Router>
			<QueryParamProvider {...{ path: '/' }} reachHistory={globalHistory}>
				<Zero path="/" />
			</QueryParamProvider>
		</Router>
	)
}
export default RouteApp
