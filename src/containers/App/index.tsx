import { globalHistory, RouteComponentProps, Router } from '@reach/router'
import React, { useEffect } from 'react'
import { QueryParamProvider } from 'use-query-params'
import { useQ } from '../../hooks'
import { end } from '../../utils'
import Lain from '../Lain'

const Zero = (props: RouteComponentProps) => {
	const { q, inc } = useQ()

	useEffect(() => [inc, end][Number(typeof q !== 'number')](), [q, inc])

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
