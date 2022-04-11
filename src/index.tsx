import React from 'react'
import ReactDOM from 'react-dom'
import { QueryParamProvider } from 'use-query-params'
import * as serviceWorker from './config/serviceWorker'
import App from './containers/App'
import { voice } from './containers/Lain/logic'

const rootEl = document.getElementById('root')

voice()
if (rootEl !== null) {
	ReactDOM.createRoot(rootEl).render(
		<React.StrictMode>
			<QueryParamProvider>
				<App />
			</QueryParamProvider>
		</React.StrictMode>,
		rootEl
	)
	serviceWorker.unregister()
}
