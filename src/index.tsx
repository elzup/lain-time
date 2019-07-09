import * as React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

import * as serviceWorker from './config/serviceWorker'

import { voice } from './containers/Lain/logic'

const rootEl = document.getElementById('root')

voice()
if (rootEl !== null) {
	ReactDOM.render(<App />, rootEl)
	serviceWorker.unregister()
}
