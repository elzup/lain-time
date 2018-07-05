// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import HomeContainer from '../HomeContainer'
import ZeroContainer from '../HomeContainer/Zero'

// const PreComp = (props: any) => <div>{JSON.stringify(props)}</div>

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={ZeroContainer} />
			<Route exact path="/:time" component={HomeContainer} />
		</Switch>
	</Router>
)
export default RouteApp
