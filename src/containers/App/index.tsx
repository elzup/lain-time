import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Lain from '../Lain'
import Zero from '../Zero'

import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

const RouteApp = () => (
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={Zero} />
			<Route exact path="/0" component={Zero} />
			<Route exact path="/0/:time" component={Lain} />
		</Switch>
	</Router>
)
export default RouteApp
