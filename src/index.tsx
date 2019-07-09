import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import App from './containers/App'

import * as serviceWorker from './config/serviceWorker'
import configureStore from './store'

import './config/init'

const { store } = configureStore()

const rootEl = document.getElementById('root')

if (rootEl !== null) {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootEl
	)
	serviceWorker.unregister()
}
