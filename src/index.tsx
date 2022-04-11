import React from 'react'
import ReactDOM from 'react-dom/client'
import * as serviceWorker from './config/serviceWorker'
import App from './containers/App'
import { voice } from './containers/Lain/logic'

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)

voice()

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootEl
)
serviceWorker.unregister()
