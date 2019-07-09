import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Lain from '../Lain'
import Zero from '../Zero'

// const PreComp = (props: any) => <div>{JSON.stringify(props)}</div>

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Zero} />
			<Route exact path="/0" component={Zero} />
			<Route exact path="/0/:time" component={Lain} />
			{/* <Zero /> */}
		</Switch>
	</Router>
)
export default RouteApp
