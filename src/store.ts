import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { Store } from './types'

export default () => {
	const middleware = [thunk]
	const funcs = []
	funcs.push(applyMiddleware(...middleware))

	const devtool =
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	if (devtool) {
		funcs.push(devtool)
	}

	const composer = compose(...funcs)

	const store: Store = createStore(reducer, composer)
	return { store }
}
