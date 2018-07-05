// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Lain from '../Lain'
import Zero from '../Zero'

// const PreComp = (props: any) => <div>{JSON.stringify(props)}</div>

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Zero} />
			<Route exact path="/:time" component={Lain} />
		</Switch>
	</Router>
)
export default RouteApp
